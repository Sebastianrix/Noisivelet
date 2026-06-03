import styles from './GloomyScene.module.css'

const W = 1440
const H = 420

// Layered pine silhouette: 4 notched tiers + trunk
function pineD(cx, y, h, w) {
  const t  = Math.max(3, w * 0.09)
  const th = h * 0.14
  const pts = [
    [cx,           y - h],
    [cx + w*.26,   y - h*.74],
    [cx + w*.19,   y - h*.69],
    [cx + w*.50,   y - h*.50],
    [cx + w*.38,   y - h*.45],
    [cx + w*.73,   y - h*.27],
    [cx + w*.57,   y - h*.22],
    [cx + w*1.02,  y - th],
    [cx + t,       y - th],
    [cx + t,       y],
    [cx - t,       y],
    [cx - t,       y - th],
    [cx - w*1.02,  y - th],
    [cx - w*.57,   y - h*.22],
    [cx - w*.73,   y - h*.27],
    [cx - w*.38,   y - h*.45],
    [cx - w*.50,   y - h*.50],
    [cx - w*.19,   y - h*.69],
    [cx - w*.26,   y - h*.74],
  ]
  return 'M' + pts.map(([x, py]) => `${Math.round(x)},${Math.round(py)}`).join(' L') + ' Z'
}

// Continuous jagged silhouette of many small background pines
const FAR_FOREST = (() => {
  const baseY = 350
  const heights = [70,56,80,64,74,58,84,52,68,76,60,82,72,56,78,66,86,58,74,70,62,80,54,72,84,66,56,76,82,60,78,58,86,68,72,80,60,74,56,84,70,76,64,82,58,78,72,86,62,68]
  const widths  = [17,15,19,16,18,15,21,14,17,19,16,20,18,15,19,17,22,15,18,17,15,20,13,18,21,16,14,19,21,16,20,15,22,17,18,20,15,18,14,21,17,19,16,21,15,19,18,22,16,17]
  const n = heights.length
  let d = `M-10,${baseY}`
  for (let i = 0; i < n; i++) {
    const cx = (W / (n - 1)) * i
    const h = heights[i], hw = widths[i]
    d += ` L${cx-hw},${baseY}`
    d += ` L${cx-hw*.44},${baseY-h*.54} L${cx-hw*.30},${baseY-h*.50}`
    d += ` L${cx},${baseY-h}`
    d += ` L${cx+hw*.30},${baseY-h*.50} L${cx+hw*.44},${baseY-h*.54}`
    d += ` L${cx+hw},${baseY}`
  }
  d += ` L${W+10},${baseY} L${W+10},${H+60} L-10,${H+60} Z`
  return d
})()

const MID_PINES = [
  [  30, H, 152, 39], [155, H, 136, 35], [278, H, 166, 43],
  [ 400, H, 140, 36], [520, H, 158, 41], [640, H, 146, 38],
  [ 762, H, 170, 44], [882, H, 143, 37], [998, H, 160, 42],
  [1112, H, 148, 39], [1228,H, 166, 43], [1375,H, 143, 37],
  [1460, H, 152, 39],
]

const NEAR_PINES = [
  [  -8, H+32, 308, 81], [128, H+32, 288, 74], [286, H+32, 322, 85],
  [ 452, H+32, 278, 71], [618, H+32, 305, 79], [792, H+32, 330, 87],
  [ 958, H+32, 282, 73], [1118,H+32, 310, 81], [1282,H+32, 292, 76],
  [1452, H+32, 318, 84],
]

// Bare tree: trunk + curved branches as stroked paths
// Returns an array of {d, sw} for each path segment
function bareTreePaths(cx, baseY, scale = 1) {
  const s = scale
  const bx = cx
  const by = baseY
  return [
    // trunk
    { d: `M${bx},${by} L${bx-1},${by-182*s}`,  sw: 11*s },
    // left major branch
    { d: `M${bx-2},${by-140*s} C${bx-42*s},${by-172*s} ${bx-90*s},${by-198*s} ${bx-148*s},${by-228*s}`, sw: 6*s },
    { d: `M${bx-90*s},${by-198*s} C${bx-112*s},${by-218*s} ${bx-134*s},${by-242*s} ${bx-152*s},${by-264*s}`, sw: 3.5*s },
    { d: `M${bx-134*s},${by-242*s} C${bx-148*s},${by-256*s} ${bx-160*s},${by-272*s} ${bx-168*s},${by-286*s}`, sw: 2*s },
    { d: `M${bx-148*s},${by-228*s} C${bx-162*s},${by-244*s} ${bx-178*s},${by-259*s} ${bx-192*s},${by-274*s}`, sw: 2*s },
    // left minor branch
    { d: `M${bx-3},${by-158*s} C${bx-32*s},${by-178*s} ${bx-62*s},${by-193*s} ${bx-88*s},${by-208*s}`, sw: 4*s },
    { d: `M${bx-62*s},${by-193*s} C${bx-76*s},${by-208*s} ${bx-90*s},${by-224*s} ${bx-100*s},${by-240*s}`, sw: 2*s },
    // right major branch
    { d: `M${bx+1},${by-122*s} C${bx+44*s},${by-152*s} ${bx+94*s},${by-176*s} ${bx+148*s},${by-202*s}`, sw: 7*s },
    { d: `M${bx+94*s},${by-176*s} C${bx+116*s},${by-196*s} ${bx+140*s},${by-218*s} ${bx+162*s},${by-238*s}`, sw: 3.5*s },
    { d: `M${bx+140*s},${by-218*s} C${bx+154*s},${by-233*s} ${bx+168*s},${by-248*s} ${bx+180*s},${by-263*s}`, sw: 2*s },
    { d: `M${bx+148*s},${by-202*s} C${bx+163*s},${by-218*s} ${bx+178*s},${by-233*s} ${bx+192*s},${by-246*s}`, sw: 2*s },
    // right upper branch
    { d: `M${bx+0},${by-148*s} C${bx+30*s},${by-170*s} ${bx+62*s},${by-188*s} ${bx+92*s},${by-204*s}`, sw: 4.5*s },
    { d: `M${bx+62*s},${by-188*s} C${bx+78*s},${by-204*s} ${bx+96*s},${by-220*s} ${bx+112*s},${by-236*s}`, sw: 2.5*s },
    { d: `M${bx+92*s},${by-204*s} C${bx+105*s},${by-218*s} ${bx+118*s},${by-232*s} ${bx+130*s},${by-244*s}`, sw: 2*s },
    // upper reach
    { d: `M${bx-1},${by-182*s} C${bx-14*s},${by-196*s} ${bx-28*s},${by-212*s} ${bx-38*s},${by-228*s}`, sw: 3*s },
    { d: `M${bx-1},${by-178*s} C${bx+12*s},${by-194*s} ${bx+24*s},${by-210*s} ${bx+34*s},${by-226*s}`, sw: 3*s },
    { d: `M${bx-28*s},${by-212*s} C${bx-36*s},${by-224*s} ${bx-44*s},${by-238*s} ${bx-50*s},${by-252*s}`, sw: 1.5*s },
    { d: `M${bx+24*s},${by-210*s} C${bx+32*s},${by-222*s} ${bx+40*s},${by-236*s} ${bx+46*s},${by-250*s}`, sw: 1.5*s },
  ]
}

const TREES = [
  { cx: 720, baseY: 510, scale: 1.0 },
  { cx: 352, baseY: 510, scale: 0.88 },
  { cx: 1088, baseY: 510, scale: 0.92 },
]

export default function GloomyScene() {
  return (
    <div className={styles.wrapper}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="gloomSky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#07070d"/>
            <stop offset="52%"  stopColor="#0f0f1c"/>
            <stop offset="100%" stopColor="#18182a"/>
          </linearGradient>
          <linearGradient id="gloomFog" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#10101e" stopOpacity="0"/>
            <stop offset="100%" stopColor="#09091a" stopOpacity="0.88"/>
          </linearGradient>
          <linearGradient id="gloomFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0d0d0f" stopOpacity="0"/>
            <stop offset="100%" stopColor="#0d0d0f" stopOpacity="1"/>
          </linearGradient>
          {/* Cloud filters — generous region to prevent clipping */}
          <filter id="cBlur18" x="-25%" y="-80%" width="150%" height="260%">
            <feGaussianBlur stdDeviation="18"/>
          </filter>
          <filter id="cBlur11" x="-25%" y="-80%" width="150%" height="260%">
            <feGaussianBlur stdDeviation="11"/>
          </filter>
          <filter id="cBlur6" x="-25%" y="-80%" width="150%" height="260%">
            <feGaussianBlur stdDeviation="6"/>
          </filter>
          {/* Halo for bare trees — very soft glow */}
          <filter id="treeGlow" x="-30%" y="-15%" width="160%" height="130%">
            <feGaussianBlur stdDeviation="4"/>
          </filter>
        </defs>

        {/* Sky */}
        <rect width={W} height={H} fill="url(#gloomSky)"/>

        {/* Diffuse glow at horizon — sun hidden behind thick cloud cover */}
        <ellipse
          cx={720} cy={H * 0.8} rx={560} ry={160}
          fill="#1c1c30" opacity="0.32"
          filter="url(#cBlur18)"
        />

        {/* ── CLOUDS ── */}

        {/* Back layer — palest, slowest */}
        <g className={styles.cloudBack} filter="url(#cBlur18)" opacity="0.44">
          <ellipse cx={100}  cy={72}  rx={238} ry={64} fill="#1e1e30"/>
          <ellipse cx={360}  cy={55}  rx={298} ry={72} fill="#1c1c2e"/>
          <ellipse cx={626}  cy={80}  rx={218} ry={56} fill="#1d1d2e"/>
          <ellipse cx={892}  cy={60}  rx={318} ry={76} fill="#1f1f31"/>
          <ellipse cx={1162} cy={78}  rx={268} ry={64} fill="#1c1c2d"/>
          <ellipse cx={1400} cy={66}  rx={220} ry={60} fill="#1d1d2e"/>
          <ellipse cx={1600} cy={74}  rx={200} ry={58} fill="#1e1e2f"/>
          <ellipse cx={248}  cy={112} rx={194} ry={50} fill="#1b1b2c"/>
          <ellipse cx={770}  cy={104} rx={238} ry={56} fill="#1c1c2d"/>
          <ellipse cx={1038} cy={97}  rx={208} ry={52} fill="#1b1b2b"/>
        </g>

        {/* Mid layer */}
        <g className={styles.cloudMid} filter="url(#cBlur11)" opacity="0.71">
          <ellipse cx={68}   cy={135} rx={205} ry={63} fill="#161625"/>
          <ellipse cx={292}  cy={110} rx={275} ry={76} fill="#151524"/>
          <ellipse cx={555}  cy={138} rx={244} ry={69} fill="#161625"/>
          <ellipse cx={825}  cy={120} rx={325} ry={85} fill="#141422"/>
          <ellipse cx={1098} cy={140} rx={268} ry={71} fill="#161625"/>
          <ellipse cx={1350} cy={126} rx={218} ry={64} fill="#151524"/>
          <ellipse cx={1580} cy={132} rx={196} ry={60} fill="#141422"/>
          <ellipse cx={425}  cy={166} rx={215} ry={58} fill="#141423"/>
          <ellipse cx={968}  cy={160} rx={258} ry={66} fill="#151524"/>
          <ellipse cx={1228} cy={153} rx={198} ry={54} fill="#141423"/>
        </g>

        {/* Front layer — heaviest, darkest storm clouds */}
        <g className={styles.cloudFront} filter="url(#cBlur6)" opacity="0.84">
          <ellipse cx={188}  cy={194} rx={300} ry={87} fill="#101019"/>
          <ellipse cx={488}  cy={176} rx={344} ry={97} fill="#0e0e18"/>
          <ellipse cx={792}  cy={196} rx={374} ry={102} fill="#0f0f1a"/>
          <ellipse cx={1095} cy={180} rx={319} ry={90} fill="#0e0e18"/>
          <ellipse cx={1368} cy={196} rx={240} ry={80} fill="#101019"/>
          <ellipse cx={1590} cy={188} rx={218} ry={74} fill="#0f0f1a"/>
          <ellipse cx={48}   cy={210} rx={164} ry={60} fill="#0d0d17"/>
          <ellipse cx={658}  cy={216} rx={284} ry={76} fill="#0e0e18"/>
          <ellipse cx={1218} cy={208} rx={264} ry={78} fill="#0f0f1a"/>
          <ellipse cx={925}  cy={224} rx={228} ry={67} fill="#0d0d17"/>
        </g>

        {/* ── TREES ── */}

        {/* Far background forest */}
        <path d={FAR_FOREST} fill="#0c0c1c" opacity="0.62"/>

        {/* Bare deciduous trees — soft atmospheric halo pass */}
        <g stroke="#1a1a2c" fill="none" strokeLinecap="round" strokeLinejoin="round"
           filter="url(#treeGlow)" opacity="0.55">
          {TREES.map((tree, ti) =>
            bareTreePaths(tree.cx, tree.baseY, tree.scale).map(({ d, sw }, i) => (
              <path key={`h-${ti}-${i}`} d={d} strokeWidth={sw + 5}/>
            ))
          )}
        </g>

        {/* Bare deciduous trees — dark silhouette pass */}
        <g stroke="#050510" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {TREES.map((tree, ti) =>
            bareTreePaths(tree.cx, tree.baseY, tree.scale).map(({ d, sw }, i) => (
              <path key={`t-${ti}-${i}`} d={d} strokeWidth={sw}/>
            ))
          )}
        </g>

        {/* Mid pine layer */}
        <g fill="#07070f">
          {MID_PINES.map(([cx, y, h, w], i) => (
            <path key={i} d={pineD(cx, y, h, w)}/>
          ))}
        </g>

        {/* Fog band — depth between tree layers */}
        <rect x={0} y={292} width={W} height={128} fill="url(#gloomFog)"/>

        {/* Near pine layer — dominant foreground */}
        <g fill="#030308">
          {NEAR_PINES.map(([cx, y, h, w], i) => (
            <path key={i} d={pineD(cx, y, h, w)}/>
          ))}
        </g>

        {/* Bottom vignette — blends scene into page background */}
        <rect x={0} y={H * 0.58} width={W} height={H * 0.42} fill="url(#gloomFade)"/>
      </svg>
    </div>
  )
}
