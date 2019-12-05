

document.addEventListener('DOMContentLoaded',()=>{

    new Window( 0, 0, 600, 300, {
        title: 'Windows.js — Online test',
        content: `
            <h1> Hello World ! </h1>
            <h3> Apply css inside window is very simply: </h3>
            <pre><code>
    new Window( x, y, width, height, {
        title: 'Windows.js — Online test',
        content: '&lt;h1&gt; Hello World ! &lt;/h1&gt;',
        style: \`
            h1 { 
                text-align: center; 
                padding: 15px;
                font-size: 38px;
                color: gray;
            }
        \`
    })
            </code></pre>
            <h3> by Ghom </h3>
        `,
        style: `
            h1 { 
                text-align: center; 
                padding: 15px;
                font-size: 38px;
                color: gray;
            }
        `
    })

    let i=0
    for(const name in Window.themes){ i++
        new Window( i*200, i*150, 600, 300, {
            theme: name,
            title: 'Theme — ' + name,
            content: `
                <h1> h1 Title </h1>
                <h2> h2 Title </h2>
                <h3> h3 Title </h3>
                <p> Paragraphe </p>
            `
        })
    }
    
})

