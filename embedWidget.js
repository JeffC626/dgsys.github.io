function createEmbed(url, containerId) {
    const container = document.getElementById(containerId);
    if (container) {
        const iframe = document.createElement('iframe');
        iframe.src = url;
        iframe.width = "100%";
        iframe.height = "400px";
        iframe.frameBorder = "0";
        iframe.allowFullscreen = true;
        container.appendChild(iframe);
    }
}

// Usage
createEmbed("https://httishere.github.io/notion-widget/v220/progress.html?e=tmnU/S99nK8x+o4R5xIWE32RIR7rNMwQHXCgrReVKAY=", "widget-container");

