// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;
function generateMarkdown(data) {
  // Generate the license badge based on the selected license
  const licenseBadge = renderLicenseBadge(data.license);

  return `
# ${data.title}

## Description
${data.description}

## Table of Contents
- [Contribution Guidelines](#contribution)
- [Links](#links)
- [License](#license)
- [Questions](#questions)

## Contribution Guidelines
${data.contribution}

## Links
${data.links}

## License
${licenseBadge}
This project is licensed under the ${data.license} license.

## Questions
For any questions or feedback, please feel free to contact the author:
- GitHub: [${data.author}](https://github.com/${data.author})
- Project Link: ${data.links}
`;
}

