
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Samuel-Henrique6/js-developer-portfolio/blob/main/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
