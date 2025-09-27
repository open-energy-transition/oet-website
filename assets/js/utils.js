/**
 * Renders a section title with consistent formatting
 * @param {string} sectionTitle - The title to display
 * @returns {string} HTML string containing the formatted section title
 */
export function renderSectionTitle(sectionTitle) {
  return `<p class="card-text-custom"><small class="text-muted"><strong>${sectionTitle}:</strong></small>`;
}

/**
 * Renders a horizontal list of links with a section title
 * @param {string} sectionTitle - The title to display for non-array items
 * @param {Array<{link: string, title: string}> | string} items - Array of items with link and title, or a single string
 * @returns {string} HTML string containing the formatted horizontal list or empty string if no items
 */
export function renderListHorizontal(sectionTitle, items) {
  if (Array.isArray(items)) {
    return `
        ${renderSectionTitle(sectionTitle)}
        <span>
            ${items
              .map(
                (item) => `
                <a href="${item.link}" target="_blank">
                <small class="link-primary text-underline">${item.title}</small>
                </a>
            `,
              )
              .join(",")}
        </span>
        </p>
    `;
  }
  if (typeof items === "string") {
    return `
            ${renderSectionTitle(sectionTitle)}
            <span>
                <small class="text-muted
            ">${items}</small>
                        </span>
                    </p>
            `;
  }
  return "";
}

/**
 * Renders a list of links with a section title
 * @param {string} sectionTitle - The title to display above the list
 * @param {Array<{link?: string, title: string}>} items - Array of items with optional link and required title properties
 * @returns {string} HTML string containing the formatted list or empty string if no items
 */
export function renderLinkList(sectionTitle, items) {
  if (Array.isArray(items)) {
    return `
            ${renderSectionTitle(sectionTitle)}
            <ul style="margin: 0;">
            ${items
              ?.map(
                (item) => `
                <li class="card-text-custom">
                <a href="${item.link ?? ""}" target="_blank">
                    <small class="${item.link ? "link-primary text-underline" : "text-muted"}">${item.title}</small>
                </a>
                </li>   
            `,
              )
              .join("")}
            </ul>
        `;
  }
  return "";
}
