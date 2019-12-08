
/** 
 * Official theme for Windows.js
 * name: Bootstrap
 * author: Ghom
 */

Window.addTheme('Bootstrap', 'gnome', {
    window: {
        boxShadow: '0 .25rem .75rem rgba(0, 0, 0, .2)',
        borderRadius: 'calc(.25rem - 1px) calc(.25rem - 1px) 0 0',
        background: '#fff',
        border: '1px solid rgba(0,0,0,.125)'
    },
    header: {
        backgroundColor: 'rgba(0,0,0,.03)',
        color: '#212529',
        height: '35px',
        fontWeight: 'bolder',
        borderBottom: '1px solid rgba(0,0,0,.125)',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
    },
    body: {
        color: '#212529',
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
    },
    buttons: {
        marginRight: '8px',
        justifyContent: 'center',
        width: '75px'
    },
    button: {
        backgroundColor: 'rgba(0,0,0,.03)',
        border: '1px solid rgba(0,0,0,.125)',
        borderRadius: '.2rem',
        width: '25px',
        height: '21px'
    }, 
    close: { 
        borderTopLeftRadius: '0',
        borderBottomLeftRadius: '0',
        borderLeft: 'none'
    },
    close_hover: { background: '#dc3545' },
    minimize: { 
        borderTopRightRadius: '0',
        borderBottomRightRadius: '0'
    }, 
    minimize_hover: { background: '#ffc107' },
    fullscreen: {
        borderRadius: '0',
        borderLeft: 'none'
    },
    fullscreen_hover: { background: '#007bff' },
    title: { paddingLeft: '70px' }
},{
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 612 612">
        <g sodipodi:docname="twitter_bootstrap_logo.svg" inkscape:version="0.48.1 r9760" xmlns:svg="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape">
            <path fill="#563D7C" d="M612 510c0 56.1-45.9 102-102 102H102C45.9 612 0 566.1 0 510V102C0 45.9 45.9 0 102 0h408c56.1 0 102 45.9 102 102v408z"/>
            <path fill="#FFF" d="M166.3 133h173.5c32 0 57.7 7.3 77 22s29 36.8 29 66.5c0 18-4.4 33.4-13.2 46.2-8.8 12.8-21.4 22.8-37.8 29.8v1c22 4.7 38.7 15.1 50 31.2 11.3 16.2 17 36.4 17 60.8 0 14-2.5 27.1-7.5 39.2-5 12.2-12.8 22.7-23.5 31.5s-24.3 15.8-41 21-36.5 7.8-59.5 7.8h-164V133zm62.5 149.5h102c15 0 27.5-4.2 37.5-12.8s15-20.8 15-36.8c0-18-4.5-30.7-13.5-38s-22-11-39-11h-102v98.6zm0 156.5h110.5c19 0 33.8-4.9 44.2-14.8 10.5-9.8 15.8-23.8 15.8-41.8 0-17.7-5.2-31.2-15.8-40.8s-25.2-14.2-44.2-14.2H228.8V439z"/>
        </g>
    </svg>`,
    grab: true
})