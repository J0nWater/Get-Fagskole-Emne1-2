

export function createView() {
    return `
        <h1>AI generated</h1>
        <iframe
        src="../clickers/ai.html" name="ai-generated"
        height="300px"
        width="500px"
           allowTransparency="true"
    ></iframe>    
    <details>
    <summary>Show/Hide Code</summary>
                    <!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">&lt;!DOCTYPE html&gt;</span>
        <span style="color: #007700">&lt;html&gt;</span>

        <span style="color: #007700">&lt;body</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;text-align: center;&quot;</span><span style="color: #007700">&gt;</span>
            <span style="color: #007700">&lt;h1</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;color: green;&quot;</span><span style="color: #007700">&gt;</span>
                Clicks with time in html!
            <span style="color: #007700">&lt;/h1&gt;</span>

            <span style="color: #007700">&lt;h4&gt;</span>
                How to count the number of
                times a button is clicked?
            <span style="color: #007700">&lt;/h4&gt;</span>

            <span style="color: #007700">&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;btn&quot;</span><span style="color: #007700">&gt;</span>Click Here!<span style="color: #007700">&lt;/button&gt;</span>

            <span style="color: #007700">&lt;p&gt;</span>
                Button Clicked <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;display&quot;</span><span style="color: #007700">&gt;</span>0<span style="color: #007700">&lt;/span&gt;</span> Times
            <span style="color: #007700">&lt;/p&gt;</span>

            <span style="color: #007700">&lt;script&gt;</span>
                <span style="color: #008800; font-weight: bold">function</span> createCounter() {
                    <span style="color: #008800; font-weight: bold">let</span> count <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;
                    <span style="color: #008800; font-weight: bold">return</span> <span style="color: #008800; font-weight: bold">function</span> () {
                        count<span style="color: #333333">++</span>;
                        <span style="color: #008800; font-weight: bold">return</span> count;
                    }
                }
                <span style="color: #008800; font-weight: bold">const</span> counter <span style="color: #333333">=</span> createCounter();
                <span style="color: #008800; font-weight: bold">const</span> button <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;btn&quot;</span>);
                <span style="color: #008800; font-weight: bold">const</span> disp <span style="color: #333333">=</span> <span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;display&quot;</span>);
                button.addEventListener(<span style="background-color: #fff0f0">&quot;click&quot;</span>, () <span style="color: #333333">=&gt;</span> {
                    disp.innerHTML <span style="color: #333333">=</span> counter();
                });
            <span style="color: #007700">&lt;/script&gt;</span>
        <span style="color: #007700">&lt;/body&gt;</span>
        <span style="color: #007700">&lt;/html&gt;</span>
        </pre></div>
        </details>

        `;
}