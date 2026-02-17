import { useState } from "react";

const holidays = [
  { date: "2026-01-01", name: "New Year's Day", countries: ["US","CO","MX","BO","PE","PK","PH","NG","JM"], type: "public", note: "Global celebration — great moment for an all-team message" },
  { date: "2026-01-06", name: "Epiphany / Three Kings Day", countries: ["CO","BO","PE"], type: "public", note: "Día de Reyes — important gift-giving tradition in Latin America" },
  { date: "2026-01-12", name: "Epiphany Holiday (observed)", countries: ["CO"], type: "public", note: "Moved to Monday under Colombia's Emiliani Law" },
  { date: "2026-01-19", name: "Martin Luther King Jr. Day", countries: ["US"], type: "public", note: "US federal holiday" },
  { date: "2026-01-22", name: "Plurinational State Day", countries: ["BO"], type: "public", note: "Celebrates Bolivia's plurinational identity" },
  { date: "2026-01-29", name: "Lunar New Year (Year of the Horse)", countries: ["ALL"], type: "cultural", note: "Acknowledged globally — team member shared greeting" },
  { date: "2026-02-05", name: "Kashmir Day", countries: ["PK"], type: "public", note: "Pakistan national holiday — solidarity with Kashmir" },
  { date: "2026-02-16", name: "Presidents' Day", countries: ["US"], type: "public", note: "US federal holiday" },
  { date: "2026-02-16", name: "Carnival Monday", countries: ["BO"], type: "public", note: "Carnival celebrations — major cultural event in Bolivia" },
  { date: "2026-02-17", name: "Shrove Tuesday / Martes de Ch'alla", countries: ["BO"], type: "public", note: "Bolivian tradition of blessing homes and businesses for abundance — Pachamama offering" },
  { date: "2026-02-18", name: "Ramadan Begins (approx.)", countries: ["PK","NG"], type: "cultural", note: "Holy month of fasting — be mindful of meeting times and energy levels. Dates subject to moon sighting." },
  { date: "2026-02-25", name: "EDSA People Power Revolution", countries: ["PH"], type: "public", note: "Celebrates the 1986 People Power Revolution that restored democracy in the Philippines" },
  { date: "2026-03-16", name: "Benito Juarez Birthday", countries: ["MX"], type: "public", note: "Mexican national holiday honoring President Juarez" },
  { date: "2026-03-19", name: "Father's Day (Bolivia)", countries: ["BO"], type: "cultural", note: "Bolivia celebrates Father's Day on St. Joseph's Day" },
  { date: "2026-03-20", name: "Eid al-Fitr (approx. Day 1)", countries: ["PK","PH","NG"], type: "public", note: "End of Ramadan — major celebration! 3 days off in Pakistan. Also a public holiday in the Philippines. Greet with Eid Mubarak! Subject to moon sighting." },
  { date: "2026-03-21", name: "Eid al-Fitr Day 2", countries: ["PK","NG"], type: "public", note: "Eid celebrations continue" },
  { date: "2026-03-22", name: "Eid al-Fitr Day 3", countries: ["PK"], type: "public", note: "Third day of Eid in Pakistan" },
  { date: "2026-03-23", name: "Pakistan Day / Saint Joseph's Day (CO)", countries: ["PK","CO"], type: "public", note: "Celebrates Lahore Resolution in Pakistan; Saint Joseph's Day observed in Colombia" },
  { date: "2026-04-02", name: "Maundy Thursday", countries: ["CO","BO","PE","PH"], type: "public", note: "Beginning of Easter/Holy Week — many LatAm and Filipino team members take extended time" },
  { date: "2026-04-03", name: "Good Friday", countries: ["CO","BO","PE","PH","NG","JM"], type: "public", note: "Public holiday across LatAm, Philippines, Nigeria, and Jamaica. Holy Week is major in Colombia and the Philippines." },
  { date: "2026-04-06", name: "Easter Monday", countries: ["NG","JM"], type: "public", note: "Nigeria and Jamaica public holiday" },
  { date: "2026-04-09", name: "Araw ng Kagitingan (Day of Valor)", countries: ["PH"], type: "public", note: "Philippines national holiday honoring the bravery of Filipino soldiers in WWII" },
  { date: "2026-05-01", name: "Labor Day / Workers' Day", countries: ["CO","MX","BO","PE","PK","PH","NG"], type: "public", note: "International Workers Day — observed in most Dripjobs countries except US and Jamaica" },
  { date: "2026-05-10", name: "Mother's Day (Mexico)", countries: ["MX"], type: "cultural", note: "Very important in Mexican culture — always May 10" },
  { date: "2026-05-18", name: "Ascension Day Holiday", countries: ["CO"], type: "public", note: "Colombia public holiday (moved to Monday)" },
  { date: "2026-05-23", name: "Labour Day (Jamaica)", countries: ["JM"], type: "public", note: "Jamaica's National Labour Day — a day for community service and national pride" },
  { date: "2026-05-25", name: "Memorial Day", countries: ["US"], type: "public", note: "US federal holiday" },
  { date: "2026-05-27", name: "Eid al-Adha (approx.) / Mother's Day (BO)", countries: ["PK","PH","NG","BO"], type: "public", note: "Festival of Sacrifice — 3 days in Pakistan. Also a public holiday in the Philippines. Bolivia celebrates Mothers Day. Greet with Eid Mubarak! Subject to moon sighting." },
  { date: "2026-05-28", name: "Eid al-Adha Day 2", countries: ["PK","NG"], type: "public", note: "Eid al-Adha celebrations continue" },
  { date: "2026-05-29", name: "Eid al-Adha Day 3", countries: ["PK"], type: "public", note: "Third day of Eid in Pakistan" },
  { date: "2026-06-04", name: "Corpus Christi", countries: ["CO","BO"], type: "public", note: "Catholic holiday observed in Colombia and Bolivia" },
  { date: "2026-06-07", name: "Battle of Arica / Flag Day", countries: ["PE"], type: "public", note: "Peru national holiday" },
  { date: "2026-06-12", name: "Independence Day (PH) / Democracy Day (NG)", countries: ["PH","NG"], type: "public", note: "Philippines celebrates independence from Spain in 1898; Nigeria celebrates return to democracy" },
  { date: "2026-06-15", name: "Sacred Heart", countries: ["CO"], type: "public", note: "Colombia public holiday" },
  { date: "2026-06-21", name: "Aymara New Year", countries: ["BO"], type: "public", note: "Indigenous Andean celebration of the winter solstice — culturally significant" },
  { date: "2026-06-24", name: "Ashura Day 1 (approx.)", countries: ["PK"], type: "public", note: "Day of mourning and remembrance in Islam. Subject to moon sighting." },
  { date: "2026-06-25", name: "Ashura Day 2", countries: ["PK"], type: "public", note: "Second day of Ashura observance" },
  { date: "2026-06-29", name: "Saints Peter and Paul", countries: ["CO","PE"], type: "public", note: "Public holiday in Colombia and Peru" },
  { date: "2026-07-04", name: "Independence Day (US)", countries: ["US"], type: "public", note: "US federal holiday — company-wide day off for US employees" },
  { date: "2026-07-20", name: "Independence Day (Colombia)", countries: ["CO"], type: "public", note: "Major national holiday — expect all Colombian team members off" },
  { date: "2026-07-23", name: "Peruvian Air Force Day", countries: ["PE"], type: "public", note: "Peru national holiday" },
  { date: "2026-07-28", name: "Independence Day (Peru)", countries: ["PE"], type: "public", note: "Fiestas Patrias — typically 2-day celebration (Jul 28-29)" },
  { date: "2026-07-29", name: "Independence Day Day 2 (Peru)", countries: ["PE"], type: "public", note: "Second day of Peru independence celebration" },
  { date: "2026-08-01", name: "Emancipation Day (Jamaica)", countries: ["JM"], type: "public", note: "Celebrates the emancipation of enslaved people in Jamaica in 1838" },
  { date: "2026-08-06", name: "Independence Day (BO, JM) / Battle of Junin (PE)", countries: ["PE","BO","JM"], type: "public", note: "Bolivia Independence Day, Jamaica Independence Day, and Peru Battle of Junin" },
  { date: "2026-08-07", name: "Battle of Boyaca", countries: ["CO"], type: "public", note: "Colombia national holiday" },
  { date: "2026-08-14", name: "Independence Day (Pakistan)", countries: ["PK"], type: "public", note: "Major national holiday — expect all Pakistan team members off" },
  { date: "2026-08-17", name: "Assumption of Mary (observed)", countries: ["CO"], type: "public", note: "Colombia public holiday (moved to Monday)" },
  { date: "2026-08-21", name: "Ninoy Aquino Day", countries: ["PH"], type: "public", note: "Philippines national holiday honoring Senator Benigno 'Ninoy' Aquino Jr." },
  { date: "2026-08-25", name: "Eid Milad-un-Nabi (approx.)", countries: ["PK","NG"], type: "public", note: "Birthday of Prophet Muhammad — public holiday in Pakistan and Nigeria. Subject to moon sighting." },
  { date: "2026-08-30", name: "Santa Rosa de Lima", countries: ["PE"], type: "public", note: "Peru national holiday" },
  { date: "2026-08-31", name: "National Heroes Day (Philippines)", countries: ["PH"], type: "public", note: "Philippines national holiday honoring all Filipino heroes" },
  { date: "2026-09-07", name: "Labor Day (US)", countries: ["US"], type: "public", note: "US federal holiday" },
  { date: "2026-09-16", name: "Independence Day (Mexico)", countries: ["MX"], type: "public", note: "Grito de Independencia — Mexico biggest national holiday!" },
  { date: "2026-10-01", name: "National Day (Nigeria)", countries: ["NG"], type: "public", note: "Nigeria Independence Day" },
  { date: "2026-10-08", name: "Battle of Angamos", countries: ["PE"], type: "public", note: "Peru national holiday" },
  { date: "2026-10-12", name: "Columbus Day / Dia de la Raza", countries: ["US","CO"], type: "public", note: "US federal holiday; Colombia celebrates as Dia de la Raza" },
  { date: "2026-10-19", name: "National Heroes Day (Jamaica)", countries: ["JM"], type: "public", note: "Jamaica national holiday honoring seven National Heroes including Marcus Garvey and Nanny of the Maroons" },
  { date: "2026-11-01", name: "All Saints' Day", countries: ["CO","PE","PH"], type: "public", note: "Public holiday in Colombia, Peru, and the Philippines" },
  { date: "2026-11-02", name: "Dia de los Muertos", countries: ["MX","BO"], type: "cultural", note: "Day of the Dead — deeply important Mexican tradition honoring deceased loved ones" },
  { date: "2026-11-09", name: "Iqbal Day", countries: ["PK"], type: "public", note: "Pakistan holiday honoring poet-philosopher Allama Iqbal" },
  { date: "2026-11-11", name: "Veterans Day", countries: ["US"], type: "public", note: "US federal holiday" },
  { date: "2026-11-16", name: "Independence of Cartagena", countries: ["CO"], type: "public", note: "Colombia public holiday (moved to Monday)" },
  { date: "2026-11-20", name: "Revolution Day", countries: ["MX"], type: "public", note: "Mexico national holiday" },
  { date: "2026-11-26", name: "Thanksgiving", countries: ["US"], type: "public", note: "US federal holiday — many take Friday off too" },
  { date: "2026-11-30", name: "Bonifacio Day", countries: ["PH"], type: "public", note: "Philippines national holiday honoring Andres Bonifacio, father of the Philippine Revolution" },
  { date: "2026-12-08", name: "Immaculate Conception", countries: ["CO","PE","PH"], type: "public", note: "Public holiday in Colombia, Peru, and the Philippines" },
  { date: "2026-12-09", name: "Battle of Ayacucho", countries: ["PE"], type: "public", note: "Peru national holiday" },
  { date: "2026-12-25", name: "Christmas / Quaid-e-Azam Day", countries: ["US","CO","MX","BO","PE","PK","PH","NG","JM"], type: "public", note: "Global holiday. In Pakistan, also Quaid-e-Azam Day (founder's birthday). Great moment for all-team message!" },
  { date: "2026-12-26", name: "Boxing Day", countries: ["NG","JM"], type: "public", note: "Nigeria and Jamaica public holiday" },
  { date: "2026-12-30", name: "Rizal Day", countries: ["PH"], type: "public", note: "Philippines national holiday honoring national hero José Rizal" },
];

const fl = { US: "\u{1F1FA}\u{1F1F8}", CO: "\u{1F1E8}\u{1F1F4}", MX: "\u{1F1F2}\u{1F1FD}", BO: "\u{1F1E7}\u{1F1F4}", PE: "\u{1F1F5}\u{1F1EA}", PK: "\u{1F1F5}\u{1F1F0}", PH: "\u{1F1F5}\u{1F1ED}", NG: "\u{1F1F3}\u{1F1EC}", JM: "\u{1F1EF}\u{1F1F2}", ALL: "\u{1F30D}" };
const nm = { US: "United States", CO: "Colombia", MX: "Mexico", BO: "Bolivia", PE: "Peru", PK: "Pakistan", PH: "Philippines", NG: "Nigeria", JM: "Jamaica", ALL: "All Team" };
const cl = { US: "#3B82F6", CO: "#F59E0B", MX: "#10B981", BO: "#EF4444", PE: "#8B5CF6", PK: "#22C55E", PH: "#DC2626", NG: "#06B6D4", JM: "#F97316", ALL: "#6366F1" };
const mn = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const dn = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

function getCalDays(y, m) {
  const s = new Date(y, m, 1).getDay();
  const t = new Date(y, m + 1, 0).getDate();
  const d = [];
  for (let i = 0; i < s; i++) d.push(null);
  for (let i = 1; i <= t; i++) d.push(i);
  return d;
}

function MonthGrid({ mi, filtered, today, onSelect, selectedDay }) {
  const days = getCalDays(2026, mi);
  const hmap = {};
  filtered.forEach(h => {
    const d = new Date(h.date + "T12:00:00");
    if (d.getMonth() === mi) {
      const day = d.getDate();
      if (!hmap[day]) hmap[day] = [];
      hmap[day].push(h);
    }
  });
  const td = new Date(today + "T12:00:00");
  const todayDay = (td.getMonth() === mi && td.getFullYear() === 2026) ? td.getDate() : null;

  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 1, marginBottom: 2 }}>
        {dn.map(d => <div key={d} style={{ textAlign: "center", fontSize: 11, fontWeight: 600, color: "#9CA3AF", padding: "4px 0" }}>{d}</div>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3 }}>
        {days.map((day, i) => {
          if (!day) return <div key={`e${i}`} />;
          const hh = hmap[day];
          const isTd = day === todayDay;
          const isSel = selectedDay === day;
          const ds = `2026-${String(mi+1).padStart(2,"0")}-${String(day).padStart(2,"0")}`;
          const past = ds < today;
          const dots = [];
          if (hh) { const seen = new Set(); hh.forEach(h => h.countries.forEach(c => { if (c !== "ALL" && !seen.has(c)) { seen.add(c); dots.push(c); } })); }
          return (
            <div key={day} onClick={() => hh && onSelect(day === selectedDay ? null : day)} style={{
              position: "relative", textAlign: "center", padding: "6px 2px 8px", borderRadius: 8,
              cursor: hh ? "pointer" : "default",
              background: isSel ? "#EFF6FF" : isTd ? "#FFFBEB" : hh ? "#F9FAFB" : "transparent",
              border: isSel ? "2px solid #3B82F6" : isTd ? "2px solid #F59E0B" : hh ? "1px solid #E5E7EB" : "1px solid transparent",
              opacity: past && !isTd ? 0.4 : 1, transition: "all 0.15s", minHeight: 44
            }}>
              <div style={{ fontSize: 13, fontWeight: isTd || hh ? 700 : 400, color: isTd ? "#B45309" : hh ? "#1F2937" : "#6B7280" }}>{day}</div>
              {dots.length > 0 && (
                <div style={{ display: "flex", justifyContent: "center", gap: 2, marginTop: 3, flexWrap: "wrap" }}>
                  {dots.slice(0, 5).map(c => <div key={c} style={{ width: 6, height: 6, borderRadius: "50%", background: cl[c] }} />)}
                  {dots.length > 5 && <div style={{ fontSize: 8, color: "#9CA3AF" }}>+</div>}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function App() {
  const [sel, setSel] = useState(["US","CO","MX","BO","PE","PK","PH","NG","JM","ALL"]);
  const [mf, setMf] = useState("all");
  const [culOnly, setCulOnly] = useState(false);
  const [exp, setExp] = useState(null);
  const [view, setView] = useState("list");
  const [cm, setCm] = useState(1);
  const [sd, setSd] = useState(null);

  const tog = c => setSel(p => p.includes(c) ? p.filter(x => x !== c) : [...p, c]);

  const filtered = holidays.filter(h => {
    const cc = h.countries.some(c => sel.includes(c));
    const tt = !culOnly || h.type === "cultural";
    return cc && tt;
  });

  const listF = filtered.filter(h => mf === "all" || new Date(h.date + "T12:00:00").getMonth() === parseInt(mf));

  const grouped = {};
  listF.forEach(h => { const m = mn[new Date(h.date + "T12:00:00").getMonth()]; if (!grouped[m]) grouped[m] = []; grouped[m].push(h); });

  const today = "2026-02-17";
  const teams = { US: 11, CO: 5, PE: 3, PK: 4, PH: 1, NG: 1, BO: 1, MX: 1, JM: "1*" };

  const sdHols = sd ? filtered.filter(h => { const d = new Date(h.date + "T12:00:00"); return d.getMonth() === cm && d.getDate() === sd; }) : [];

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", maxWidth: 860, margin: "0 auto", padding: 16, background: "#F9FAFB", minHeight: "100vh" }}>
      <div style={{ background: "linear-gradient(135deg, #5A2FBA, #7C3AED)", borderRadius: 12, padding: "24px 28px", marginBottom: 20, color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 28 }}>{"\u{1F4C5}"}</span>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700 }}>Dripjobs Team Cultural Calendar 2026</h1>
        </div>
        <p style={{ margin: "8px 0 0", fontSize: 13, opacity: 0.85 }}>Holidays & cultural observances across 9 countries &bull; {holidays.length} dates tracked</p>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16, padding: "12px 16px", background: "white", borderRadius: 10, border: "1px solid #E5E7EB" }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", width: "100%", marginBottom: 4 }}>TEAM BY LOCATION</span>
        {Object.entries(teams).map(([c, n]) => (
          <div key={c} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, background: "#F3F4F6", borderRadius: 6, padding: "4px 8px" }}>
            <span>{fl[c]}</span><span style={{ fontWeight: 600 }}>{n}</span><span style={{ color: "#9CA3AF" }}>{nm[c]}</span>
          </div>
        ))}
        <div style={{ width: "100%", fontSize: 11, color: "#9CA3AF", fontStyle: "italic", marginTop: 2 }}>* Pending new hire</div>
      </div>

      <div style={{ background: "white", borderRadius: 10, padding: 16, marginBottom: 16, border: "1px solid #E5E7EB" }}>
        <div style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", marginBottom: 8 }}>FILTER BY COUNTRY</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
          {Object.keys(fl).filter(c => c !== "ALL").map(c => {
            const a = sel.includes(c);
            return (
              <button key={c} onClick={() => tog(c)} style={{
                display: "flex", alignItems: "center", gap: 4, padding: "6px 12px", borderRadius: 20,
                border: `2px solid ${a ? cl[c] : "#E5E7EB"}`, background: a ? cl[c] + "18" : "white",
                color: a ? cl[c] : "#9CA3AF", cursor: "pointer", fontSize: 12, fontWeight: 500, transition: "all 0.15s"
              }}>{fl[c]} {nm[c]}</button>
            );
          })}
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ display: "flex", background: "#F3F4F6", borderRadius: 8, padding: 2, gap: 2 }}>
            {[{id:"list",label:"\u{1F4CB} List"},{id:"month",label:"\u{1F4C6} Month"}].map(v => (
              <button key={v.id} onClick={() => { setView(v.id); setSd(null); }} style={{
                padding: "6px 14px", borderRadius: 6, border: "none", fontSize: 12, fontWeight: 600, cursor: "pointer", transition: "all 0.15s",
                background: view === v.id ? "white" : "transparent", color: view === v.id ? "#1F2937" : "#9CA3AF",
                boxShadow: view === v.id ? "0 1px 3px rgba(0,0,0,0.1)" : "none"
              }}>{v.label}</button>
            ))}
          </div>
          {view === "list" && (
            <div>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#6B7280", marginRight: 8 }}>MONTH</span>
              <select value={mf} onChange={e => setMf(e.target.value)} style={{ padding: "6px 10px", borderRadius: 8, border: "1px solid #D1D5DB", fontSize: 13 }}>
                <option value="all">All Months</option>
                {mn.map((m, i) => <option key={m} value={i}>{m}</option>)}
              </select>
            </div>
          )}
          <label style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#374151", cursor: "pointer" }}>
            <input type="checkbox" checked={culOnly} onChange={() => setCulOnly(!culOnly)} style={{ accentColor: "#6366F1" }} />
            Cultural only
          </label>
        </div>
      </div>

      {view === "month" && (
        <div style={{ background: "white", borderRadius: 10, border: "1px solid #E5E7EB", overflow: "hidden", marginBottom: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px", background: "#F9FAFB", borderBottom: "1px solid #E5E7EB" }}>
            <button onClick={() => { setCm(Math.max(0, cm - 1)); setSd(null); }} disabled={cm === 0}
              style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid #D1D5DB", background: "white", cursor: cm === 0 ? "not-allowed" : "pointer", fontSize: 16, opacity: cm === 0 ? 0.3 : 1 }}>{"\u2190"}</button>
            <h2 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: "#1F2937" }}>{mn[cm]} 2026</h2>
            <button onClick={() => { setCm(Math.min(11, cm + 1)); setSd(null); }} disabled={cm === 11}
              style={{ padding: "6px 14px", borderRadius: 6, border: "1px solid #D1D5DB", background: "white", cursor: cm === 11 ? "not-allowed" : "pointer", fontSize: 16, opacity: cm === 11 ? 0.3 : 1 }}>{"\u2192"}</button>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, padding: "10px 16px", borderBottom: "1px solid #F3F4F6" }}>
            {Object.keys(fl).filter(c => c !== "ALL" && sel.includes(c)).map(c => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: cl[c] }} />
                <span style={{ color: "#6B7280" }}>{fl[c]} {nm[c]}</span>
              </div>
            ))}
          </div>
          <div style={{ padding: 16 }}>
            <MonthGrid mi={cm} filtered={filtered} today={today} onSelect={setSd} selectedDay={sd} />
          </div>
          {sd && sdHols.length > 0 && (
            <div style={{ borderTop: "2px solid #3B82F6", padding: 16, background: "#F0F9FF" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#1E40AF", marginBottom: 10 }}>{mn[cm]} {sd}, 2026</div>
              {sdHols.map((h, i) => (
                <div key={i} style={{ padding: "12px 14px", background: "white", borderRadius: 8, marginBottom: i < sdHols.length - 1 ? 8 : 0, border: "1px solid #DBEAFE" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", marginBottom: 6 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: "#1F2937" }}>{h.name}</span>
                    {h.type === "cultural" && <span style={{ fontSize: 10, fontWeight: 600, background: "#EDE9FE", color: "#7C3AED", padding: "2px 6px", borderRadius: 4 }}>CULTURAL</span>}
                  </div>
                  <div style={{ display: "flex", gap: 4, marginBottom: 8, flexWrap: "wrap" }}>
                    {h.countries.map(c => (
                      <span key={c} style={{ fontSize: 11, background: "#F3F4F6", borderRadius: 4, padding: "2px 8px" }}>{fl[c]} <span style={{ color: "#6B7280" }}>{c}</span></span>
                    ))}
                  </div>
                  {h.note && (
                    <div style={{ fontSize: 13, color: "#1E40AF", lineHeight: 1.6, padding: "8px 12px", background: "#EFF6FF", borderRadius: 6, borderLeft: "3px solid #60A5FA" }}>
                      {"\u{1F4A1}"} {h.note}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {view === "list" && (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {Object.keys(grouped).length === 0 && <div style={{ textAlign: "center", padding: 48, color: "#9CA3AF" }}>No holidays match your current filters</div>}
          {Object.entries(grouped).map(([m, items]) => (
            <div key={m} style={{ background: "white", borderRadius: 10, border: "1px solid #E5E7EB", overflow: "hidden" }}>
              <div style={{ padding: "12px 16px", background: "#F9FAFB", borderBottom: "1px solid #E5E7EB", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, color: "#1F2937" }}>{m}</h2>
                <span style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500 }}>{items.length} date{items.length !== 1 ? "s" : ""}</span>
              </div>
              {items.map((h, i) => {
                const past = h.date < today;
                const td = h.date === today;
                const key = `${m}-${i}`;
                const open = exp === key;
                return (
                  <div key={i} onClick={() => setExp(open ? null : key)} style={{
                    padding: "10px 16px", cursor: "pointer", transition: "background 0.15s",
                    borderBottom: i < items.length - 1 ? "1px solid #F3F4F6" : "none",
                    background: td ? "#FFFBEB" : open ? "#F0F9FF" : "transparent", opacity: past && !td ? 0.5 : 1
                  }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div style={{ minWidth: 48, textAlign: "center", flexShrink: 0 }}>
                        <div style={{ fontSize: 11, fontWeight: 600, color: td ? "#D97706" : "#9CA3AF", textTransform: "uppercase" }}>
                          {new Date(h.date + "T12:00:00").toLocaleDateString("en-US", { weekday: "short" })}
                        </div>
                        <div style={{ fontSize: 18, fontWeight: 700, color: td ? "#B45309" : "#374151" }}>
                          {new Date(h.date + "T12:00:00").getDate()}
                        </div>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                          <span style={{ fontSize: 14, fontWeight: 600, color: "#1F2937" }}>{h.name}</span>
                          {td && <span style={{ fontSize: 10, fontWeight: 700, background: "#FEF3C7", color: "#B45309", padding: "2px 6px", borderRadius: 4 }}>TODAY</span>}
                          {h.type === "cultural" && <span style={{ fontSize: 10, fontWeight: 600, background: "#EDE9FE", color: "#7C3AED", padding: "2px 6px", borderRadius: 4 }}>CULTURAL</span>}
                        </div>
                        <div style={{ display: "flex", gap: 4, marginTop: 4, flexWrap: "wrap" }}>
                          {h.countries.map(c => (
                            <span key={c} style={{ fontSize: 11, background: "#F3F4F6", borderRadius: 4, padding: "1px 6px" }}>{fl[c]} <span style={{ color: "#6B7280" }}>{c}</span></span>
                          ))}
                        </div>
                        {open && h.note && (
                          <div style={{ marginTop: 8, padding: "8px 12px", background: "#F0F9FF", borderRadius: 8, fontSize: 13, color: "#1E40AF", lineHeight: 1.5, borderLeft: "3px solid #60A5FA" }}>
                            {"\u{1F4A1}"} {h.note}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: 16, background: "linear-gradient(135deg, #F0FDF4, #ECFDF5)", borderRadius: 10, padding: 16, border: "1px solid #BBF7D0" }}>
        <h3 style={{ margin: "0 0 8px", fontSize: 14, fontWeight: 700, color: "#166534" }}>{"\u{262A}\u{FE0F}"} Ramadan Awareness (approx. Feb 18 - Mar 20, 2026)</h3>
        <p style={{ margin: 0, fontSize: 13, color: "#15803D", lineHeight: 1.6 }}>
          During Ramadan, your Pakistan dev team and Nigeria QA team member will be fasting dawn to sunset.
          Consider scheduling meetings outside fasting hours, being flexible on response times, and sending a warm acknowledgment.
        </p>
      </div>

      <div style={{ marginTop: 16, background: "white", borderRadius: 10, padding: 16, border: "1px solid #E5E7EB" }}>
        <h3 style={{ margin: "0 0 10px", fontSize: 14, fontWeight: 700, color: "#1F2937" }}>{"\u{1F4CB}"} Key Notes for HR Planning</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 13, color: "#4B5563", lineHeight: 1.6 }}>
          <div>{fl.CO} <strong>Colombia has 18 public holidays</strong> — the most of any Dripjobs country. Many shift to Mondays (Ley Emiliani).</div>
          <div>{fl.PK} <strong>Islamic holidays shift annually</strong> — dates are approximate, confirmed by moon sighting. Verify with team.</div>
          <div>{"\u{1F30D}"} <strong>May 1 (Labor Day)</strong> is observed in most countries except the US and Jamaica — plan for coverage gaps.</div>
          <div>{fl.MX} <strong>Dia de los Muertos (Nov 1-2)</strong> is culturally essential in Mexico even though not a federal holiday.</div>
          <div>{fl.BO} <strong>Martes de Ch'alla</strong> and <strong>Aymara New Year</strong> reflect Bolivia's indigenous Andean traditions.</div>
          <div>{fl.PH} <strong>Philippines has unique national holidays</strong> — EDSA Revolution, Ninoy Aquino Day, Bonifacio Day, and Rizal Day are all observed.</div>
          <div>{fl.NG} <strong>Nigeria observes Islamic holidays</strong> — Eid al-Fitr, Eid al-Adha, and Eid Milad-un-Nabi dates shift annually based on moon sighting.</div>
          <div>{fl.JM} <strong>Jamaica Emancipation Day (Aug 1)</strong> and <strong>Independence Day (Aug 6)</strong> are the most significant national holidays.</div>
          <div>{"\u{26A0}\u{FE0F}"} <strong>Contractor note:</strong> You cannot require contractors to take specific days off, but acknowledging local holidays builds trust and retention.</div>
        </div>
      </div>

      <div style={{ marginTop: 12, textAlign: "center", fontSize: 11, color: "#9CA3AF", padding: 8 }}>Dripjobs HR &bull; Cultural Calendar 2026 &bull; Click any date or holiday for details</div>
    </div>
  );
}
