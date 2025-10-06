/**
 * Projects Renderer
 * Dynamically renders project cards based on category and filters
 */

class ProjectsRenderer {
  constructor() {
    this.projects = [];
  }

  async loadProjects() {
    try {
      const response = await fetch('/data/projects.json');
      const data = await response.json();
      this.projects = data.projects;
      return this.projects;
    } catch (error) {
      console.error('Error loading projects:', error);
      return [];
    }
  }

  filterProjects(category = null, featured = null) {
    let filtered = [...this.projects];

    if (category) {
      filtered = filtered.filter(p => p.category === category);
    }

    if (featured !== null) {
      filtered = filtered.filter(p => p.featured === featured);
    }

    return filtered.sort((a, b) => a.order - b.order);
  }

  getBadgeClasses(badgeColor) {
    const colorMap = {
      blue: 'bg-blue-600 dark:bg-blue-700',
      yellow: 'bg-yellow-600 dark:bg-yellow-700',
      green: 'bg-green-600 dark:bg-green-700',
      purple: 'bg-purple-600 dark:bg-purple-700'
    };
    return colorMap[badgeColor] || colorMap.blue;
  }

  renderCard(project) {
    const badgeClasses = this.getBadgeClasses(project.badgeColor);
    const isLaunching = project.status === 'launching-soon';

    const buttonHTML = isLaunching
      ? `<button class="btn variant-soft sz-sm opacity-60 cursor-not-allowed" disabled>
           <span>Launching soon</span>
         </button>`
      : `<a href="${project.url}" target="_blank" class="group btn variant-soft sz-sm">
           <span>Visit live website</span>
           <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
             <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7v6m0-6h-6"/>
           </svg>
         </a>`;

    return `
      <div class="relative group overflow-hidden card variant-outlined flex flex-col">
        <div class="relative aspect-video overflow-hidden rounded-t-[--card-border-radius]">
          <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover rounded-t-lg">
          <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
        <div class="relative flex flex-col flex-1">
          <div class="mt-6 pb-6 rounded-b-[--card-border-radius] flex-1">
            <div class="mb-3">
              <span class="inline-block px-2 py-1 text-xs font-medium text-white ${badgeClasses} rounded-full">${project.badge}</span>
            </div>
            <h3 class="text-lg font-semibold text-title mb-3">${project.title}</h3>
            <p class="text-gray-700 dark:text-gray-300">${project.description}</p>
          </div>
          <div class="flex gap-3 -mb-[--card-padding] py-4 border-t mt-auto">
            ${buttonHTML}
          </div>
        </div>
      </div>
    `;
  }

  async render(containerId, options = {}) {
    const { category = null, featured = null } = options;

    if (this.projects.length === 0) {
      await this.loadProjects();
    }

    const projects = this.filterProjects(category, featured);
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }

    container.innerHTML = projects.map(project => this.renderCard(project)).join('');
  }
}

// Export for use in HTML pages
window.ProjectsRenderer = ProjectsRenderer;
