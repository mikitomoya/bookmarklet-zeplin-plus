(function () {
    const head = document.getElementsByTagName('head').item(0);
    const styleTag = document.createElement('style');
    /* language=CSS */
    const css = `
        .dashboardScreenGrid {
            grid-template-columns: repeat(auto-fill, 384px);
        }
        .screenThumbnail .screenImage {
            min-width: 360px;
            min-height: 202px;
        }
                `;
    styleTag.media = 'screen';
    styleTag.appendChild(document.createTextNode(css));
    head.appendChild(styleTag);
})();
