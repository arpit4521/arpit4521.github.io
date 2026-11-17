export function ProjectDiagram({ type, number }: { type: "nodes" | "packets" | "clocks" | "timeline"; number: string }) {
  return <div className={`project-art art-${type}`} aria-hidden="true">
    <div className="diagram-meta"><span>{type === "nodes" ? "VIRTUAL ENVIRONMENT" : type === "packets" ? "PACKET INSPECTION" : type === "clocks" ? "CLOCK-DOMAIN CROSSING" : "TIME-TRIGGERED COMMUNICATION"}</span><span>CONCEPT STUDY</span></div>
    <svg viewBox="0 0 600 240" fill="none" className="diagram-svg">
      {type === "nodes" && <>
        <path d="M220 110H380M300 65V155" stroke="currentColor" strokeDasharray="4 6" opacity=".35" />
        <circle cx="300" cy="110" r="35" stroke="currentColor" opacity=".2" /><circle cx="300" cy="110" r="52" stroke="currentColor" opacity=".12" />
        <rect x="65" y="55" width="155" height="110" rx="3" stroke="currentColor" opacity=".65" /><rect x="380" y="55" width="155" height="110" rx="3" stroke="currentColor" opacity=".65" />
        <rect x="80" y="70" width="125" height="80" stroke="currentColor" opacity=".2" /><rect x="395" y="70" width="125" height="80" stroke="currentColor" opacity=".2" />
        <circle cx="95" cy="85" r="3" fill="currentColor" /><circle cx="410" cy="85" r="3" fill="currentColor" />
        <text x="142" y="112" textAnchor="middle">nRF52840</text><text x="458" y="112" textAnchor="middle">nRF52840</text><text x="300" y="115" textAnchor="middle" className="diagram-small">BLE</text>
        <text x="142" y="191" textAnchor="middle" className="diagram-small">CENTRAL</text><text x="458" y="191" textAnchor="middle" className="diagram-small">PERIPHERAL</text><text x="300" y="225" textAnchor="middle" className="diagram-small">RENODE + ZEPHYR RTOS</text>
      </>}
      {type === "packets" && <>
        {[0, 1, 2, 3].map((row) => <g key={row} transform={`translate(65 ${40 + row * 43})`}><text x="0" y="19" className="diagram-small">0{row + 1}</text><rect x="42" y="0" width="65" height="29" fill="currentColor" opacity=".08" /><rect x="113" y="0" width="80" height="29" fill="currentColor" opacity=".14" /><rect x="199" y="0" width={125 + row * 22} height="29" stroke="currentColor" opacity=".4" /><path d={`M215 15H${300 + row * 22}`} stroke="currentColor" strokeDasharray="3 6" opacity=".5" /></g>)}
        <text x="137" y="228" textAnchor="middle" className="diagram-small">HEADER</text><text x="360" y="228" textAnchor="middle" className="diagram-small">PAYLOAD → INSIGHT</text>
      </>}
      {type === "clocks" && <>
        <path d="M50 68H70V40H95V68H120V40H145V68H170V40H195V68H220" stroke="currentColor" strokeWidth="1.5" />
        <path d="M380 68H410V40H460V68H510V40H550" stroke="currentColor" strokeWidth="1.5" />
        <text x="135" y="98" textAnchor="middle" className="diagram-small">CLOCK DOMAIN A</text><text x="465" y="98" textAnchor="middle" className="diagram-small">CLOCK DOMAIN B</text>
        <path d="M70 165H210M390 165H530" stroke="currentColor" opacity=".5" /><path d="m520 160 10 5-10 5" stroke="currentColor" />
        {[0, 1, 2, 3, 4, 5].map((cell) => <rect key={cell} x={210 + cell * 30} y="143" width="26" height="44" fill="currentColor" fillOpacity={cell < 4 ? ".15" : "0"} stroke="currentColor" strokeOpacity=".4" />)}
        <text x="300" y="220" textAnchor="middle" className="diagram-small">ASYNCHRONOUS FIFO / GRAY-CODE POINTERS</text>
      </>}
      {type === "timeline" && <>
        <path d="M65 177H540" stroke="currentColor" opacity=".4" />
        {[0, 1, 2, 3, 4, 5, 6].map((slot) => <g key={slot}><path d={`M${75 + slot * 73} 170v14`} stroke="currentColor" opacity=".5" /><rect x={75 + slot * 73} y={slot % 2 ? 104 : 60} width="55" height="35" fill="currentColor" fillOpacity={slot % 2 ? ".08" : ".19"} stroke="currentColor" strokeOpacity=".4" /><path d={`M${75 + slot * 73} ${slot % 2 ? 139 : 95}v${slot % 2 ? 38 : 82}`} stroke="currentColor" strokeDasharray="3 5" opacity=".25" /></g>)}
        <text x="75" y="210" className="diagram-small">REFERENCE</text><text x="530" y="210" textAnchor="end" className="diagram-small">SHARED TIME →</text>
      </>}
    </svg>
    <div className="diagram-footer"><span>ENGINEERING STUDY</span><span className="diagram-number">{number}</span></div>
  </div>;
}
