<link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet">
<style>
.eng{--teal:#0d9488;--teal-bg:#effcfa;--coral:#f97316;--coral-bg:#fff4ea;--violet:#7c3aed;--violet-bg:#f6f1ff;
--rose:#e11d48;--rose-bg:#fff1f3;--green:#059669;--green-bg:#ecfdf5;--amber:#d97706;--amber-bg:#fffaeb;
--ink:#22252b;--muted:#5b6472;--paper:#fffdf9;--line:#ece4d8;
max-width:880px;margin:0 auto;background:var(--paper);color:var(--ink);
font-family:'Inter',system-ui,sans-serif;font-size:17.5px;line-height:1.78}
.eng *{box-sizing:border-box}
.eng h1,.eng h2,.eng h3{font-family:'Baloo 2',sans-serif;color:var(--ink);line-height:1.25}
.eng code,.eng .mono{font-family:'JetBrains Mono',Consolas,monospace}
.eng p{margin:0 0 1.05em;color:#3a3f47}

/* hero */
.eng-hero{position:relative;padding:44px 38px 38px;border-radius:0 0 28px 28px;color:#fff;overflow:hidden;
background:linear-gradient(135deg,#0d9488 0%,#0891b2 55%,#7c3aed 120%)}
.eng-hero::after{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.16) 2px,transparent 2px);background-size:26px 26px;opacity:.5}
.eng-hero-top{position:relative;display:flex;flex-wrap:wrap;gap:10px;align-items:center}
.eng-badge{font-family:'Baloo 2',sans-serif;font-weight:700;font-size:12.5px;letter-spacing:.04em;padding:6px 13px;border-radius:999px;background:rgba(255,255,255,.2);border:1px solid rgba(255,255,255,.35)}
.eng-hero h1{position:relative;color:#fff;font-size:clamp(28px,5vw,40px);margin:16px 0 0}
.eng-hero p{position:relative;color:#eafff9;max-width:56ch;margin-top:10px;font-size:16.5px}
.eng-cta{position:relative;display:inline-flex;align-items:center;gap:8px;margin-top:20px;padding:12px 20px;background:#fff;color:#0d9488;font-weight:700;font-family:'Baloo 2',sans-serif;border-radius:12px;text-decoration:none;box-shadow:0 10px 24px rgba(0,0,0,.18)}
.eng-hero-note{position:relative;margin-top:12px;font-size:13.5px;color:#d6fff5}

.eng-body{padding:6px 38px 4px}

/* goal box */
.eng-goal{margin:26px 0;padding:18px 22px;border-radius:16px;background:var(--violet-bg);border:1px solid #e4d8ff;display:flex;gap:14px}
.eng-goal .ic{font-size:22px;flex:none}
.eng-goal p{margin:0;color:#3a2f55}
.eng-goal b{color:var(--violet);display:block;font-family:'Baloo 2',sans-serif;margin-bottom:2px}

/* section headers */
.eng h2{font-size:clamp(21px,3.4vw,26px);margin:46px 0 14px;padding-left:16px;border-left:6px solid var(--teal)}
.eng h3{font-size:19px;margin:26px 0 10px;color:var(--teal)}

/* example boxes */
.eng-ex{margin:16px 0 22px;border-radius:14px;overflow:hidden;border:1px solid var(--line)}
.eng-ex-head{padding:9px 16px;font-family:'Baloo 2',sans-serif;font-weight:700;font-size:13.5px;color:#fff}
.eng-ex.good .eng-ex-head{background:var(--green)}
.eng-ex.tip .eng-ex-head{background:var(--amber)}
.eng-ex-body{padding:14px 18px;background:#fff}
.eng-ex-body ul{margin:0;padding-left:0;list-style:none}
.eng-ex-body li{position:relative;padding-left:26px;margin:8px 0;color:#3a3f47}
.eng-ex.good .eng-ex-body li::before{content:"✓";position:absolute;left:0;color:var(--green);font-weight:900}
.eng-ex.tip .eng-ex-body li::before{content:"→";position:absolute;left:0;color:var(--amber);font-weight:900}

/* formula card */
.eng-formula{margin:20px 0 26px;padding:20px 24px;border-radius:16px;background:linear-gradient(135deg,var(--violet-bg),#eef4ff);border:1.5px dashed #c9b6ff;text-align:center}
.eng-formula .f{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:16.5px;color:var(--violet);letter-spacing:.02em}
.eng-formula .note{margin-top:6px;font-size:13px;color:#6b5a99}

/* pronoun chips */
.eng-chips{display:flex;flex-wrap:wrap;gap:8px;margin:14px 0 22px}
.eng-chip{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:600;padding:5px 12px;border-radius:999px;background:var(--teal-bg);color:var(--teal);border:1px solid #c7ede7}

/* tables */
.eng-table-wrap{margin:18px 0 26px;overflow-x:auto;border-radius:14px;border:1px solid var(--line)}
.eng table{width:100%;border-collapse:collapse;background:#fff;font-size:15.5px}
.eng th{background:var(--teal);color:#fff;text-align:left;padding:11px 14px;font-family:'Baloo 2',sans-serif;font-weight:600;font-size:14px}
.eng td{padding:10px 14px;border-top:1px solid var(--line);color:#3a3f47;vertical-align:top}
.eng tr:nth-child(even) td{background:var(--teal-bg)}

/* mistake cards */
.eng-mistakes{display:grid;gap:14px;margin:18px 0 26px}
.eng-mistake{border-radius:14px;border:1px solid var(--line);overflow:hidden}
.eng-mistake .row{display:flex;gap:10px;align-items:flex-start;padding:11px 16px}
.eng-mistake .row.wrong{background:var(--rose-bg)}
.eng-mistake .row.right{background:var(--green-bg)}
.eng-mistake .tag{font-family:'Baloo 2',sans-serif;font-weight:700;font-size:12px;flex:none;width:64px;padding-top:1px}
.eng-mistake .row.wrong .tag{color:var(--rose)}
.eng-mistake .row.right .tag{color:var(--green)}
.eng-mistake .row.wrong span.txt{text-decoration:line-through;text-decoration-color:#f3a7b6;color:#7a1830}
.eng-mistake .row.right span.txt{color:#0b4a35;font-weight:600}
.eng-mistake .why{padding:9px 16px 13px;font-size:13.5px;color:var(--muted);background:#fff}
.eng-mistake .why b{color:var(--ink)}

/* compare panels */
.eng-compare{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:18px 0 26px}
.eng-cpanel{border-radius:16px;padding:18px 18px;border:1.5px solid var(--line)}
.eng-cpanel.a{background:var(--teal-bg);border-color:#c7ede7}
.eng-cpanel.b{background:var(--coral-bg);border-color:#ffdcb8}
.eng-cpanel h4{margin:0 0 8px;font-family:'Baloo 2',sans-serif;font-size:15.5px}
.eng-cpanel.a h4{color:var(--teal)}
.eng-cpanel.b h4{color:var(--coral)}
.eng-cpanel ul{margin:0;padding-left:0;list-style:none}
.eng-cpanel li{margin:8px 0;font-size:14.5px;color:#3a3f47;padding-left:18px;position:relative}
.eng-cpanel li::before{content:"•";position:absolute;left:0;font-weight:900}
.eng-cpanel.a li::before{color:var(--teal)}
.eng-cpanel.b li::before{color:var(--coral)}
.eng-vs{display:flex;align-items:center;justify-content:center;font-family:'Baloo 2',sans-serif;font-weight:700;color:#fff;background:var(--ink);width:34px;height:34px;border-radius:50%;margin:-31px auto -14px;position:relative;font-size:12px;box-shadow:0 4px 10px rgba(0,0,0,.2)}
@media(max-width:600px){.eng-compare{grid-template-columns:1fr}.eng-vs{margin:6px auto}}

/* practice cards w/ reveal */
.eng-practice{border:1px solid var(--line);border-radius:14px;margin:12px 0;overflow:hidden}
.eng-practice .q{display:flex;gap:12px;padding:14px 16px;background:#fff;align-items:flex-start}
.eng-practice .qn{flex:none;width:26px;height:26px;border-radius:8px;background:var(--violet-bg);color:var(--violet);font-family:'Baloo 2',sans-serif;font-weight:700;font-size:13px;display:flex;align-items:center;justify-content:center}
.eng-practice details{border-top:1px dashed var(--line)}
.eng-practice summary{cursor:pointer;padding:9px 16px;font-family:'Baloo 2',sans-serif;font-size:13.5px;color:var(--violet);background:var(--violet-bg);list-style:none}
.eng-practice summary::-webkit-details-marker{display:none}
.eng-practice summary::before{content:"👁  ";}
.eng-practice .ans{padding:12px 16px;background:var(--green-bg);color:#0b4a35;font-weight:600;font-size:15px}

/* challenge checklist */
.eng-challenge{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin:16px 0 22px}
.eng-challenge div{padding:12px 14px;border-radius:12px;background:var(--coral-bg);border:1px solid #ffdcb8;font-size:14px;color:#7c2d12;font-weight:600;display:flex;gap:8px}
.eng-challenge div::before{content:"✎";color:var(--coral);font-weight:900}

/* AI teacher chips */
.eng-ai{display:flex;flex-wrap:wrap;gap:9px;margin:16px 0 26px}
.eng-ai span{font-size:13.5px;font-weight:600;padding:8px 14px;border-radius:999px;background:var(--violet-bg);color:var(--violet);border:1px solid #e4d8ff}

/* takeaway */
.eng-takeaway{margin:30px 0;padding:28px;border-radius:20px;color:#fff;background:linear-gradient(135deg,#0d9488,#7c3aed);text-align:center}
.eng-takeaway h3{color:#fff;margin:0 0 10px}
.eng-takeaway .f{font-family:'JetBrains Mono',monospace;font-weight:700;font-size:17px;background:rgba(255,255,255,.16);display:inline-block;padding:10px 18px;border-radius:12px;margin-top:8px}
.eng-final-link{display:block;text-align:center;margin:8px 0 40px}
.eng-final-link a{font-family:'Baloo 2',sans-serif;font-weight:700;color:var(--teal);text-decoration:none;font-size:16px}

@media(max-width:600px){.eng-hero{padding:32px 20px 28px;border-radius:0 0 20px 20px}.eng-body{padding:0 20px}}
</style>

<div class="eng">

<div class="eng-hero">
  <div class="eng-hero-top">
    <span class="eng-badge">LESSON 01</span>
    <span class="eng-badge">TENSE FOCUS · PRESENT SIMPLE</span>
  </div>
  <h1>Present Simple, Mastered</h1>
  <p>The tense for habits, routines, facts, states and timetables — the everyday backbone of English. Learn the rules once, apply them everywhere.</p>
  <a class="eng-cta" href="https://aienglish.detleng.com/lessons/present-simple/">🌐 Open the interactive lesson →</a>
  <p class="eng-hero-note">Study the full lesson below, then use the website for answer-reveal practice and context-aware AI Teacher support.</p>
</div>

<div class="eng-body">

<div class="eng-goal"><span class="ic">🎯</span><p><b>Lesson goal</b>By the end of this lesson, you will use the Present Simple for habits, routines, facts, states and repeated events; build positive, negative and question forms; apply third-person singular spelling correctly; and tell it apart from the Present Continuous.</p></div>

## 1. What Is It?

The Present Simple presents something as generally true, normal, regular or repeated. It does not usually describe an action happening at this exact moment.

<div class="eng-ex good">
<div class="eng-ex-head">Present Simple in action</div>
<div class="eng-ex-body"><ul>
<li>I walk to work every morning.</li>
<li>Water boils at 100°C.</li>
<li>She works in a hospital.</li>
<li>They live near the station.</li>
</ul></div>
</div>

Think of it as the tense for what is **normally true across time** — not what is happening right now.

## 2. When Do We Use It?

### Habits and routines
<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>I check my email after breakfast.</li>
<li>She goes to the gym three times a week.</li>
<li>We usually eat dinner at seven.</li>
</ul></div></div>

### Facts and general truths
<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>The Earth moves around the Sun.</li>
<li>Plants need water.</li>
<li>Madrid is the capital of Spain.</li>
</ul></div></div>

### Permanent or long-term situations
<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>He lives in Valencia.</li>
<li>I work for an international company.</li>
<li>They own a small business.</li>
</ul></div></div>

### States, feelings and opinions
<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>I know the answer.</li>
<li>She likes classical music.</li>
<li>We believe you.</li>
<li>He needs some help.</li>
</ul></div></div>

### Timetables and fixed schedules
<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>The train leaves at 7:30 tomorrow.</li>
<li>The lesson starts at nine.</li>
<li>The shop closes at six.</li>
</ul></div></div>

### Instructions, demonstrations and commentary
<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>First, you add the flour.</li>
<li>You turn left at the traffic lights.</li>
<li>Smith passes the ball and Jones scores.</li>
</ul></div></div>

<div class="eng-chips">
<span class="eng-chip">always</span><span class="eng-chip">usually</span><span class="eng-chip">often</span><span class="eng-chip">sometimes</span><span class="eng-chip">rarely</span><span class="eng-chip">never</span><span class="eng-chip">every day</span><span class="eng-chip">on Mondays</span><span class="eng-chip">once a week</span>
</div>

These time expressions are useful clues, but **meaning — not a single keyword — chooses the tense.**

## 3. Structure / Formula

<div class="eng-formula">
<div class="f">Subject + base verb <span style="color:#0d9488">(+ -s / -es with he, she, it)</span></div>
<div class="note">This one pattern covers positive sentences across the whole tense.</div>
</div>

<div class="eng-table-wrap">
<table>
<tr><th>Subject</th><th>Verb</th><th>Example</th></tr>
<tr><td>I / You / We / They</td><td><code>work</code></td><td>They work here.</td></tr>
<tr><td>He / She / It</td><td><code>works</code></td><td>She works here.</td></tr>
</table>
</div>

### Third-person singular spelling

<div class="eng-table-wrap">
<table>
<tr><th>Pattern</th><th>Rule</th><th>Examples</th></tr>
<tr><td>Most verbs</td><td>add <code>-s</code></td><td>work → works · read → reads</td></tr>
<tr><td>Verbs ending in <code>-s, -sh, -ch, -x, -o</code></td><td>add <code>-es</code></td><td>watch → watches · go → goes</td></tr>
<tr><td>Consonant + <code>y</code></td><td>change <code>y</code> → <code>ies</code></td><td>study → studies · carry → carries</td></tr>
<tr><td>Vowel + <code>y</code></td><td>add <code>-s</code></td><td>play → plays · enjoy → enjoys</td></tr>
<tr><td>Irregular</td><td>learn separately</td><td>have → has · be → is</td></tr>
</table>
</div>

The verb **be** doesn't follow this pattern at all:

<div class="eng-formula"><div class="f">I <span style="color:#f97316">am</span> · You/We/They <span style="color:#f97316">are</span> · He/She/It <span style="color:#f97316">is</span></div></div>

## 4. Positive Sentences

<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>I work from home on Fridays.</li>
<li>You speak English clearly.</li>
<li>He drives to work.</li>
<li>She teaches mathematics.</li>
<li>The machine makes a strange noise.</li>
<li>We study together.</li>
<li>They play football after work.</li>
</ul></div></div>

<div class="eng-ex tip"><div class="eng-ex-head">Remember</div><div class="eng-ex-body"><ul><li>Never add <code>-s</code> to the verb after I, you, we or they.</li></ul></div></div>

## 5. Negative Sentences

<div class="eng-formula"><div class="f">Subject + do/does + not + base verb</div></div>

<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>I do not work on Sundays.</li>
<li>You don't need an appointment.</li>
<li>He does not live here.</li>
<li>She doesn't drive to work.</li>
<li>We don't agree.</li>
<li>They don't speak French.</li>
</ul></div></div>

<div class="eng-mistake">
  <div class="row wrong"><div class="tag">✗ wrong</div><span class="txt">She doesn't works here.</span></div>
  <div class="row right"><div class="tag">✓ right</div><span class="txt">She doesn't work here.</span></div>
  <div class="why"><b>Why:</b> after does/doesn't, the main verb returns to its base form.</div>
</div>

With **be**, never add do/does:

<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>I am not tired.</li>
<li>He isn't at home.</li>
<li>They aren't ready.</li>
</ul></div></div>

## 6. Questions

### Yes/No questions

<div class="eng-formula"><div class="f">Do/Does + subject + base verb?</div></div>

<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>Do you work here?</li>
<li>Does she speak Spanish?</li>
<li>Do they live nearby?</li>
</ul></div></div>

**Short answers:** Yes, I do. / No, I don't. — Yes, she does. / No, she doesn't.

### WH-questions

<div class="eng-formula"><div class="f">WH-word + do/does + subject + base verb?</div></div>

<div class="eng-ex good"><div class="eng-ex-body"><ul>
<li>Where do you live?</li>
<li>What does he do?</li>
<li>Why does she study English?</li>
<li>When do they arrive?</li>
</ul></div></div>

<div class="eng-ex tip"><div class="eng-ex-head">Exception</div><div class="eng-ex-body"><ul><li>When the question word is the subject, skip do/does: <em>Who works here? · What causes this problem?</em></li></ul></div></div>

Questions with **be**: <em>Are you ready? · Is she at work? · Where are they?</em>

## 7. Examples in Real Life

<div class="eng-table-wrap">
<table>
<tr><th>Context</th><th>Example</th></tr>
<tr><td>Home</td><td>I make coffee every morning. · My children walk to school.</td></tr>
<tr><td>Work &amp; study</td><td>Our office opens at eight. · Sara manages the sales team. · I attend an English class on Tuesdays.</td></tr>
<tr><td>Preferences &amp; states</td><td>He loves Italian food. · I understand the problem. · This bag belongs to Maya.</td></tr>
<tr><td>Schedules</td><td>The flight departs at 14:20. · The meeting begins after lunch.</td></tr>
</table>
</div>

## 8. Common Mistakes

<div class="eng-mistakes">
<div class="eng-mistake">
  <div class="row wrong"><div class="tag">✗ wrong</div><span class="txt">She work here.</span></div>
  <div class="row right"><div class="tag">✓ right</div><span class="txt">She works here.</span></div>
  <div class="why"><b>Why:</b> add -s/-es with he, she and it.</div>
</div>
<div class="eng-mistake">
  <div class="row wrong"><div class="tag">✗ wrong</div><span class="txt">He don't like coffee.</span></div>
  <div class="row right"><div class="tag">✓ right</div><span class="txt">He doesn't like coffee.</span></div>
  <div class="why"><b>Why:</b> use doesn't with he, she and it.</div>
</div>
<div class="eng-mistake">
  <div class="row wrong"><div class="tag">✗ wrong</div><span class="txt">She doesn't works here.</span></div>
  <div class="row right"><div class="tag">✓ right</div><span class="txt">She doesn't work here.</span></div>
  <div class="why"><b>Why:</b> use the base verb after does/doesn't.</div>
</div>
<div class="eng-mistake">
  <div class="row wrong"><div class="tag">✗ wrong</div><span class="txt">Does he lives nearby?</span></div>
  <div class="row right"><div class="tag">✓ right</div><span class="txt">Does he live nearby?</span></div>
  <div class="why"><b>Why:</b> the main verb stays in its base form after does.</div>
</div>
<div class="eng-mistake">
  <div class="row wrong"><div class="tag">✗ wrong</div><span class="txt">I am knowing the answer.</span></div>
  <div class="row right"><div class="tag">✓ right</div><span class="txt">I know the answer.</span></div>
  <div class="why"><b>Why:</b> know normally describes a state, not an action in progress.</div>
</div>
<div class="eng-mistake">
  <div class="row wrong"><div class="tag">✗ wrong</div><span class="txt">I am agree.</span></div>
  <div class="row right"><div class="tag">✓ right</div><span class="txt">I agree.</span></div>
  <div class="why"><b>Why:</b> agree is a main verb, not an adjective used with be.</div>
</div>
</div>

## 9. Compare It: Present Simple vs Present Continuous

<div class="eng-compare">
<div class="eng-cpanel a">
<h4>🟢 Present Simple</h4>
<ul>
<li>normal, repeated or generally true</li>
<li>I work from home.</li>
<li>He drinks coffee every morning.</li>
<li>She teaches English.</li>
<li>The train leaves at seven. <em>(fixed timetable)</em></li>
</ul>
</div>
<div class="eng-cpanel b">
<h4>🟠 Present Continuous</h4>
<ul>
<li>current, temporary or developing</li>
<li>I'm working from home this week.</li>
<li>He's drinking coffee now.</li>
<li>She is teaching English this semester.</li>
<li>We're leaving at seven. <em>(personal arrangement)</em></li>
</ul>
</div>
</div>

## 10. Quick Practice

<div class="eng-practice"><div class="q"><div class="qn">1</div><div>She ________ to work every day. <em>(walk)</em></div></div><details><summary>Show answer</summary><div class="ans">walks</div></details></div>

<div class="eng-practice"><div class="q"><div class="qn">2</div><div>Choose: My brother <strong>work / works / is work</strong> in a bank.</div></div><details><summary>Show answer</summary><div class="ans">works</div></details></div>

<div class="eng-practice"><div class="q"><div class="qn">3</div><div>Make it negative: He plays tennis on Mondays.</div></div><details><summary>Show answer</summary><div class="ans">He doesn't play tennis on Mondays.</div></details></div>

<div class="eng-practice"><div class="q"><div class="qn">4</div><div>Make it a question: They live in Barcelona.</div></div><details><summary>Show answer</summary><div class="ans">Do they live in Barcelona?</div></details></div>

<div class="eng-practice"><div class="q"><div class="qn">5</div><div>Correct the mistake: She doesn't likes tea.</div></div><details><summary>Show answer</summary><div class="ans">She doesn't like tea.</div></details></div>

<div class="eng-practice"><div class="q"><div class="qn">6</div><div>Complete: What time ________ the lesson ________? <em>(start)</em></div></div><details><summary>Show answer</summary><div class="ans">does the lesson start</div></details></div>

<div class="eng-practice"><div class="q"><div class="qn">7</div><div>Choose the natural form: I <strong>know / am knowing</strong> the answer.</div></div><details><summary>Show answer</summary><div class="ans">know</div></details></div>

<div class="eng-practice"><div class="q"><div class="qn">8</div><div>Complete: The train ________ at 6:45 tomorrow. <em>(leave)</em></div></div><details><summary>Show answer</summary><div class="ans">leaves</div></details></div>

## 11. Mini Challenge

Write six Present Simple sentences about:

<div class="eng-challenge">
<div>Your morning routine</div>
<div>Your work or studies</div>
<div>One fact you know</div>
<div>One thing you like</div>
<div>One thing you do not do</div>
<div>One timetable or schedule</div>
</div>

Then check: did you use **-s/-es** correctly? Did you use **do/does** in negatives and questions? Did the main verb stay in its base form after **does**?

## 12. Ask AI Teacher

<div class="eng-ai">
<span>Explain the Present Simple simply</span>
<span>Explain third-person -s</span>
<span>Give me more real-life examples</span>
<span>Test me on do and does</span>
<span>Check my sentence</span>
<span>Why is this wrong?</span>
<span>Compare with Present Continuous</span>
<span>Give me five questions</span>
</div>

<div class="eng-takeaway">
<h3>Lesson takeaway</h3>
<p style="color:#eafff9">Use the Present Simple for what is normally, repeatedly or generally true.</p>
<div class="f">I/You/We/They + base verb &nbsp;·&nbsp; He/She/It + verb-s/-es</div>
</div>

<div class="eng-final-link"><a href="https://aienglish.detleng.com/lessons/present-simple/">Continue with the interactive Present Simple lesson →</a></div>

</div>
</div>
