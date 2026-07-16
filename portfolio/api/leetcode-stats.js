// Vercel serverless function — proxies LeetCode's GraphQL endpoint server-side.
// Required because leetcode.com/graphql does not send CORS headers for browser
// cross-origin requests, so the Angular app (a static SPA) cannot call it directly.

const USERNAME = 'black_panther05';

const QUERY = `
  query getUserProfile($username: String!) {
    matchedUser(username: $username) {
      submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
        }
      }
      profile {
        ranking
      }
    }
    allQuestionsCount {
      difficulty
      count
    }
  }
`;

function countsByDifficulty(entries) {
  const map = {};
  for (const entry of entries) {
    map[entry.difficulty] = entry.count;
  }
  return map;
}

module.exports = async (req, res) => {
  try {
    const response = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Referer: `https://leetcode.com/${USERNAME}/`
      },
      body: JSON.stringify({ query: QUERY, variables: { username: USERNAME } })
    });

    if (!response.ok) {
      throw new Error(`LeetCode responded with ${response.status}`);
    }

    const json = await response.json();
    const matchedUser = json?.data?.matchedUser;
    const allQuestionsCount = json?.data?.allQuestionsCount;

    if (!matchedUser || !allQuestionsCount) {
      throw new Error('Unexpected response shape from LeetCode');
    }

    const solved = countsByDifficulty(matchedUser.submitStatsGlobal.acSubmissionNum);
    const total = countsByDifficulty(allQuestionsCount);

    const payload = {
      totalSolved: solved.All ?? 0,
      totalQuestions: total.All ?? 0,
      ranking: matchedUser.profile?.ranking ?? null,
      easy: { solved: solved.Easy ?? 0, total: total.Easy ?? 0 },
      medium: { solved: solved.Medium ?? 0, total: total.Medium ?? 0 },
      hard: { solved: solved.Hard ?? 0, total: total.Hard ?? 0 },
      updatedAt: new Date().toISOString()
    };

    // Edge-cache for an hour, serve stale for a day while revalidating in the background.
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    res.status(200).json(payload);
  } catch (error) {
    res.status(502).json({ error: 'Failed to fetch LeetCode stats' });
  }
};
