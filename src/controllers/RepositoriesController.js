const githubAPI = require('../services/githubAPI')

async function ListAllRepositoresByOrg(req, res) {

    try {
        const { organization } = req.params;

        const { data } = await githubAPI.get(`/orgs/${organization}/repos`);

        const { login, id, avatar_url } = data[0].owner;

        const organizationData = { id, login, avatar_url };

        const formattedRepositoriesData = [];

        for (const repo of data) {
            formattedRepositoriesData.push({
                id: repo.id,
                name: repo.name,
                private: repo.prive,
                url: repo.url,
                created_at: repo.created_at,
                language: repo.language
            })
        }

        return res.status(200).json({
            org: organizationData,
            repos: formattedRepositoriesData
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Failed to list all repositories!'
        })
    }

}

module.exports = {
    ListAllRepositoresByOrg
};