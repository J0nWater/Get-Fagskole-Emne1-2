

export function createView() {
    return `
        <h1>MVC version</h1>
        <iframe
        src="../clickers/mvc.html" name="mvc"
        height="300px"
        width="500px"
           allowTransparency="true"
    ></iframe>    
    <details>
    <summary>Show/Hide Code</summary>
         <!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%"><span style="color: #557799">&lt;!DOCTYPE html&gt;</span>
<span style="color: #007700">&lt;html&gt;</span>

<span style="color: #007700">&lt;body</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;text-align: center;&quot;</span> <span style="color: #0000CC">onload=</span><span style="background-color: #fff0f0">&quot;updateView()&quot;</span><span style="color: #007700">&gt;</span>
    <span style="color: #007700">&lt;h1</span> <span style="color: #0000CC">style=</span><span style="background-color: #fff0f0">&quot;color: green;&quot;</span><span style="color: #007700">&gt;</span>
        Clicks with time in html!
    <span style="color: #007700">&lt;/h1&gt;</span>

    <span style="color: #007700">&lt;h4&gt;</span>
        How to count the number of
        times a button is clicked?
    <span style="color: #007700">&lt;/h4&gt;</span>

    <span style="color: #007700">&lt;button</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;btn&quot;</span> <span style="color: #0000CC">onclick=</span><span style="background-color: #fff0f0">&quot;addToCount()&quot;</span><span style="color: #007700">&gt;</span>Click Here!<span style="color: #007700">&lt;/button&gt;</span>

    <span style="color: #007700">&lt;p&gt;</span>
        Button Clicked <span style="color: #007700">&lt;span</span> <span style="color: #0000CC">id=</span><span style="background-color: #fff0f0">&quot;display&quot;</span><span style="color: #007700">&gt;&lt;/span&gt;</span> Times
    <span style="color: #007700">&lt;/p&gt;</span>

    <span style="color: #007700">&lt;script&gt;</span>
    \t<span style="color: #008800; font-weight: bold">let</span> count <span style="color: #333333">=</span> <span style="color: #0000DD; font-weight: bold">0</span>;        
        
        <span style="color: #008800; font-weight: bold">function</span> updateView() {        \t
        \t<span style="color: #007020">document</span>.getElementById(<span style="background-color: #fff0f0">&quot;display&quot;</span>).innerHTML <span style="color: #333333">=</span> count;
        }
        
        <span style="color: #008800; font-weight: bold">function</span> addToCount() {
        \tcount<span style="color: #333333">++</span>;
            updateView();
        }
        
    <span style="color: #007700">&lt;/script&gt;</span>
<span style="color: #007700">&lt;/body&gt;</span>
<span style="color: #007700">&lt;/html&gt;</span>
</pre></div>


        </details>

        `;
}