# Colossus Tycoon: game design context pack

Last updated 22 Oct 2026 (ET). This is a public context pack for building the "play as Elon" compute-empire game. It covers the vision, the real-world starting data with sources, the current game state, and the 3D-globe plan.

**Number rules.** Every figure has a period and a source. Tags:
- **Sourced**: a named public source printed it.
- **Derived**: our own arithmetic on sourced inputs. It is never a source figure.
- **Game assumption**: a balance or design value. It is not a real-world fact.

Live game: https://benc339.github.io/elon-compute-game/ (v3). Older versions are at /v2/ and /v1/. Repo: https://github.com/benc339/elon-compute-game

---

## 1. Vision (the brief)

- The game should play like **Dyson Sphere Program**, in **3D**, across **the whole Earth**.
- **You play as Elon**, starting in **October 2026** with the real state of the world:
  - Tesla's factories
  - SpaceX's capabilities (Starship, Starlink, launch share)
  - the **13 GW data-center compute plan for end-2027**
  - in-house **turbine blade and vane casting**
- You **compete with rivals** (OpenAI/Stargate, Oracle, Meta, Microsoft, AWS, Anthropic, Google, CoreWeave) for chip-ecosystem supply.
- You **order from the real suppliers**: NVIDIA, TSMC CoWoS, SK hynix, Samsung and Micron HBM, GE Vernova, Siemens Energy, MHI, aero/industrial turbine makers, Howmet/PCC castings, transformer makers and cooling makers.
- The **tech tree is creative**: in-house blades and vanes, **modular inference boxes**, an own chip, Terafab, Optimus builders, orbital compute, and more.

**Agreed design direction:**
- A **3D globe is the strategy layer**. Sites sit at their real lat/lon, for example Colossus in Memphis/Southaven, Giga Texas, TSMC in Tainan, HBM fabs in Icheon and Pyeongtaek, turbine and transformer plants, and the Bastrop casting foundry. Animated great-circle shipping lanes run between them, and rival bids appear as events on the globe.
- Zooming into a site cross-fades into a **close-up factory view** for that site. This is today's top-down v3 factory map, with belts, docks, turbine plants and data-center halls. Zooming back out returns to the globe.
- Close-ups stay flat and top-down for now. Fully 3D close-ups are possible, but they are a much bigger build.

## 2. Musk's modular inference-box quote (Sourced)

> "We think there's also a lot of opportunity for inference compute if you manufacture modular inference compute at the factory level and then such that it's -- the power and cooling are built in at the factory and then you distribute modular inference compute clusters all over the country, if not all over the world. That's about as much as I should say about scaling power and cooling."

Source: Elon Musk, SpaceX (SPCX) Q3 2026 earnings call, 20 Oct 2026, from the Motley Fool transcript: https://www.fool.com/earnings/call-transcripts/2026/10/20/spacex-spcx-q3-2026-earnings-call-transcript/

This was an idea mentioned on the call. No product, size or date was announced.

## 3. SpaceX/xAI headline facts (SPCX Q3 2026 call, 20 Oct 2026, and Q3 release)

- **Nameplate compute:**
  - 1.7 GW at 30 Sep 2026; 1.4 GW at Q2 2026; 0.6 GW at Q3 2025 (SpaceX Q3 2026 results release).
  - "nearly 2.2 GW" at end-Oct 2026, and 2.5–3.0 GW by end-Q4 2026 (CFO on the call).
- **Plan layers.** These are different layers, not contradictions:
  - Musk would be "surprised" by less than **13 GW of compute by end-2027**.
  - He is "highly confident" of **10 GW added in 2027**.
  - There is a "small possibility" of about 23 GW total.
  - There is a **+20 GW power and cooling** plan for 2027, sized "far in excess of what is needed ... to turn the GPUs on".
- **GPU pace.** Musk: "roughly 200,000 GB300s online per month for every month for the remainder of this year and continuing that pace next year. With next year being primarily Rubin, Vera Rubin compute."
  - A later "20,000 GB300s a month" in the same call is treated as a speaker slip.
  - [Derived] Check: +~0.5 GW in about a month at ~2.44 kW per GPU at facility level ≈ 205k GPUs. 20k a month would add only ~0.05 GW.
- **Training cluster:** 440,000 Vera Rubin by end-Q2 2027.
- **Blades and vanes:** turbine OEMs say blades and vanes run "12 to 18 months behind the rest of the turbine", and "we're casting the blades and vanes for the turbines" (Musk).
- **Capex:** Q3 2026 total $19.6bn; Q4 2026 guide $35–40bn (CFO). Space Infrastructure capex was $16,444M in Q3 (release).
- **Economics:** new compute has a "payback of less than a year". Pricing is slightly above the high end of $30–50 per watt.
- **Other:** Starship Flight 14 reached orbit. Starlink has 13.6M consumer subscribers and 90% of global mass to orbit. Terafab targets a test chip in mid-2027 and volume by Q3 2028 (Fool key-points summary).

## 4. 13 GW breakdown: from gigawatts down to blades and vanes

The basis is open: the company doesn't define "nameplate". The October ramp fits a **facility basis** (IT × PUE ~1.3) better than an IT-only basis, so both are shown. The roll-up uses only "13 GW total / 10 GW added in 2027".

### 4a. Per-GW coefficients
| Part | Sourced input (period, source) | Per GW [Derived] |
|---|---|---|
| GPUs, GB300 | NVL72 = 72 GPUs, 132–140 kW operating (Supermicro datasheet, 2026); 142 kW max (NVIDIA reference architecture, 2026) | IT basis 514k–545k GPUs; facility basis at 2.44 kW/GPU (Nodus Partners, 2026) ~410k |
| GPUs, Vera Rubin | VR200 NVL72: Max-Q ~1.8 kW/GPU, ~190 kW/rack; Max-P ~2.3 kW, ~230 kW (Ming-Chi Kuo via CTEE, 7 Jan 2026) | IT 313k–379k packages; facility (PUE 1.3) 241k–292k |
| Rubin Ultra | 3.6 kW/package; Kyber rack 144 packages, ~600 kW (Tom's Hardware; Nodus, citing GTC 2025) | IT ~240k packages |
| HBM | GB300 288 GB HBM3e (Supermicro); Rubin 288 GB HBM4, 8 stacks (Tom's Hardware); Rubin Ultra 1 TB HBM4E (Tom's Hardware / GTC 2025) | GB300 IT 148k–157k TB; Rubin IT 90k–109k TB (0.72–0.87bn Gb) |
| Other DRAM | 960 GB LPDDR5X per 4-GPU GB300 tray (Supermicro) | GB300 IT ~123k–131k TB |
| CoWoS | Rubin = CoWoS-L, 2 compute + 2 I/O dies + 8 HBM (Tom's Hardware). Packages per wafer are **not sourced** | OPEN |
| NICs | GB300: 4× ConnectX-8 800G per 4 GPUs (Supermicro); Rubin uses CX-9 1.6T (Tom's Hardware), count not sourced | GB300 IT 514k–545k 800G NICs |
| Turbines | Southaven permit: 17 Solar Titan 130 + 16 Titan 350 + 8 ProEnergy 6000PE = 41 units, ~1.2 GW (MDEQ PSD permit 10 Mar 2026 via Compute Atlas); SMT-130 ~16 MW (Tom's Hardware, 2025) | ~34 turbines/GW for this mix (~29 MW/unit) |
| Blades/vanes | GE LM6000 HPT stage 1: 80 blades + 23 two-vane nozzle segments (46 vanes); stage 2: 74 blades + 24 segments (48 vanes) (GE LM6000 PC/PD/PG/PH technical details deck). GE 7HA.03 is a 4-stage turbine, counts not printed (GE Vernova whitepaper) | 154 HPT blades + 94 vanes per LM6000-class turbine. Titan 130/350 counts OPEN |
| Transformers | Illustrative 1.42 MVA firm per MW IT; N+1 3×75 MVA per 100 MW (J. R. Sterling, 2026); HV units typically 50–100 MVA, >12-month lead (SemiAnalysis, 2024) | 1.42 GVA firm / 2.25 GVA installed per GW ≈ 19–30 HV units at 75 MVA |
| Cooling | GB300 ~90% liquid / 10% air (Lenovo via Nodus); in-row CDU up to 1.8 MW per 8 racks (Supermicro); 1 MW = 284.3 refrigeration tons | ~284k tons of heat; ~556 in-row CDUs per GW IT |
| $/GW | SpaceX capex above; SemiAnalysis ~$50bn/GW (7 Aug 2026); NVIDIA content ~$40bn/GW Vera Rubin, ~$25bn/GW Grace Blackwell (Jensen Huang, NVDA Q2 FY27 call, Aug 2026) | $27–50bn per GW added (whole-company capex, an upper bound) |

### 4b. What 10 GW added in 2027 implies (all Derived)
These bounds treat the whole 10 GW as VR200 NVL72 ("primarily Vera Rubin").
- **Rubin packages:** 3.1–3.8M on an IT basis, or 2.4–2.9M on a facility basis. Cross-check: 200k/month × 12 = 2.4M.
- **HBM4:** 0.69–1.09 EB ≈ 5.5–8.8bn Gb in 2027, about 7–18% of our 48.6–75.2bn Gb modelled 2027 HBM demand.
- **NVIDIA content:** ~$400bn.
- **All-in capex:** ~$270–500bn.
- **Gas turbines:** ~340 units if all power were on-site gas at the Southaven mix, which Musk says it won't be ("not just gas turbines"). That means ~52k HPT blades and ~32k vanes. This is an upper-bound illustration, not a forecast.
- **HV transformers:** 14.2 GVA firm / 22.5 GVA installed ≈ 190–300 units at 75 MVA.
- **Cooling:** ~2.8M refrigeration tons; ~5.6k in-row CDUs (GB300-class sizing).

### 4c. Tensions
- **KGI (15 Sep 2026)** expects 5.89M Rubin + 2.85M Rubin Ultra in CY2027. xAI's 10 GW alone would be 2.4–3.8M Rubin packages, **41–65% of KGI's Rubin**, before any other customer.
  - This is a tension, not a contradiction: it isn't confirmed whether KGI counts dies or packages.
- **$/GW:** $40bn/GW of NVIDIA content would leave only ~$0–10bn/GW for everything else. That is implausible against power and shell costs, and probably reflects IT-basis GW vs nameplate GW.
- **Still unsourced:**
  - CoWoS-L packages per wafer
  - Titan 130/350 blade counts
  - whether the ProEnergy 6000PE shares the LM6000 lineage
  - Rubin NICs and transceivers per GPU
  - Rubin CDU sizing
  - SpaceX's GB300/Rubin mix
  - the non-gas share of power
  - OEM slot allocations
  - xAI's actual transformer sizing

## 5. Turbine and casting supply (the blades-and-vanes bottleneck)

**Howmet (HWM):**
- Gas Turbines end-market revenue was **$944M in FY2025** (10-K, 12 Feb 2026).
- It was **$284M in Q1 2026, +39% y/y** (Q1 deck, 7 May 2026), and **$321M in Q2 2026, +38% y/y** vs $233M (10-Q, 6 Aug 2026).
- The company targets going from ~$1B (2025) to $2B+ in 3–5 years (Tech & Markets Day, 10 Mar 2026).
- On the Q2 2026 call (6 Aug 2026, secondary transcript), it claimed **more than 50% of the global industrial gas turbine (IGT) blade market** and said **~24 months** pass from committing a new casting machine to its earliest output.

**GE Vernova:**
- Gas turbine run rate is **20 GW/yr in Q3 2026**, rising to **24 GW/yr in 2028**, with "castings and forgings arriving in '27" (2Q26 call, 22 Jul 2026). It is "mostly sold out through '30".

**Siemens Energy:**
- Company-compiled consensus for **Gas Services FY2027 revenue is €16,723m** (17 estimates, as of 17 Jul 2026, published 29 Jul 2026). Orders are €32,315m and the margin before special items is 18.3%.
- FY2025 Gas Services revenue was 66% service and 34% new units (Annual Report 2025).
- New units have **"~€400m per GW"** of revenue potential (CMD, 20 Nov 2025), and capacity is ~22 GW/yr across all frames (FY2025–27 average, same CMD).
- **Blades and vanes are its biggest limit.**
- [Derived] €16,723m × 34% ÷ €400m/GW ≈ 14 GW of new units (≈21 GW at a 50% share). This fits inside the 22 GW/yr capacity.

**Other casting supply:**
- SpaceX's in-house **blades-and-vanes foundry in Bastrop, TX** was reported at **$280M** (1 Sep 2026, secondary).
- Doncasters IGT revenue was $351M in FY2025, and an industry forecast puts IGT airfoil casting orders at +9%/yr over 2024–2035 (S-1, 15 Jun 2026).
- MHI targets +30% gas turbine shipments by FY2028 and has started precision-casting capex (27 May 2026).
- GE Aerospace agreed to acquire CPP for $11.75bn (8 Sep 2026).
- Wood Mackenzie names single-crystal hot-section blades the industry's critical bottleneck. It puts global gas turbine capacity at ~60–70 GW/yr and the large power transformer lead time at 18–36 months.

**Game hook.** Howmet's ~24-month furnace lead means its 2027 capacity was largely fixed by mid-2025 orders. Your own casting shop, the Bastrop analogue, is the way around the OEMs' 12–18-month blade lag.

## 6. Rival gigawatt plans (Sourced, Oct 2026 unless noted)
| Rival | Figures (source, period) |
|---|---|
| OpenAI Stargate | 7 US sites >9 GW planned: Abilene 1.2, Shackelford 2.0, Milam 1.2, New Mexico 2.2, Wisconsin 1.3, Michigan 1.4, Ohio <0.3 GW. Abilene ~0.3 GW was operational in Apr 2026 (Epoch AI, 2026). Original commitment 10 GW / $500B (OpenAI). Non-US sites not sourced |
| Oracle | >10 GW of power/DC capacity secured, coming online over 3 years; >400 MW delivered in Q3 FY26 (DCD / Oracle CEO blog, Mar 2026). Bloom fuel cells up to 2.8 GW, 1.2 GW contracted (Bloomberg, 13 Apr 2026). Overlaps Stargate |
| Meta | Prometheus (New Albany, OH): ~471 MW operating, 1 GW by Q3 2028 (Engineering at Meta, 19 Oct 2026; BlockWest). Hyperion (LA): 1.632 GW by Q1 2028, 2 GW by 2030, ~5 GW by ~2032 (BlockWest; Epoch); $50B Louisiana investment (CNBC, 13 Jul 2026) |
| Microsoft | Fairwater Wisconsin: 369 MW operating, 2.263 GW by Q2 2028 (BlockWest, Oct 2026). Fleet GW not sourced. Maia 300 "potentially more than a million" units next year (Reuters, 12 Oct 2026) |
| AWS | ~3.8–3.9 GW of power added in the trailing 12 months; plans to double capacity by end-2027; 2026 capex ~$200B (The Register, 6 Feb 2026; DCD; CRN) |
| Anthropic | ≥14.8 GW of disclosed commitments (SEDaily, 7 Sep 2026): Amazon up to 5 GW; Google/Broadcom TPU ~3.5 GW arriving 2027 + ~1 GW in 2026; AMD up to 2 GW (first GW H1 2027); Azure $30B with no GW given. Overlaps AWS/Google |
| Google | 2026 capex guide $195–205B (Alphabet Q2 call, 22 Jul 2026). No fleet GW disclosed |
| CoreWeave | 1.5 GW active at end-Q2 2026; ~3.7 → ~4.2 GW contracted (Q2 2026 results, 11 Aug 2026) |

Tesla (Tesla Q3 2026 update, 21 Oct 2026):
- Installed vehicle capacity: Shanghai >950k, Fremont >550k, Berlin >375k Model Y, Texas >375k Model Y + >125k Cybertruck + >125k Cybercab, Nevada Semi 25k.
- Megapack: 40 GWh (CA) + 50 GWh (TX) + 20 GWh (Shanghai).
- Optimus: early ramp in Fremont, under construction in Texas.

## 7. Every number in the game's Sources panel (v3b)
| Type | Value | Source / date |
|---|---|---|
| Sourced | Inference boxes, Musk verbatim: "We think there's also a lot of opportunity for inference compute if you manufacture modular inference compute at the factory level and then such that it's -- the power and cooling are built in at the factory and then you distribute modular inference compute clusters all over the country, if not all over the world. That's about as much as I should say about scaling power and cooling." | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 (an idea on the call; no product, size or date announced) |
| Sourced | Nameplate compute "nearly 2.2 gigawatts … at the end of this month alone in October"; 2.5–3 GW by end-Q4 2026 (CFO) | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 |
| Sourced | "surprised" if less than 13 GW of compute by end-2027; "highly confident of 10 gigawatts" added in 2027; +20 GW power/cooling plan for 2027 | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 |
| Sourced | "roughly 200,000 GB300s online per month … next year being primarily Rubin, Vera Rubin" (a later "20,000" on the same call is treated as a slip) | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 |
| Sourced | 440,000 Vera Rubin training cluster by end-Q2 2027 | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 |
| Sourced | Blades/vanes "12 to 18 months behind the rest of the turbine"; "we're casting the blades and vanes for the turbines" | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 |
| Sourced | Q4 2026 capex guide $35–40bn; Q3 capex $19.6bn | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 |
| Sourced | New compute "payback of less than a year"; pricing slightly above the high end of $30–50 per watt | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 |
| Sourced | Starship Flight 14 reached orbit and deployed Starlink V3; Flight 15 "next month" will try to catch both stages; weekly flights "at some point in the first half next year" | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 |
| Sourced | Starlink 13.6M consumer subscribers; 90% share of global mass to orbit | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 |
| Sourced | Terafab roadmap: test chip mid-2027, volume production by Q3 2028 | Motley Fool transcript, SpaceX (SPCX) Q3 2026 call, 20 Oct 2026 (Fool key-points summary) |
| Sourced | Southaven permit: 41 turbines (17 Titan 130 + 16 Titan 350 + 8 ProEnergy 6000PE) ≈ 1.2 GW, MDEQ PSD 10 Mar 2026 | Compute Atlas; MDEQ PSD permit |
| Sourced | GE LM6000 HPT: 154 blades + 94 vanes per turbine | GE LM6000 tech-details deck |
| Sourced | GE Vernova: 20 GW/yr gas turbines (3Q26) → 24 GW (2028); "mostly sold out through '30" | GE Vernova Q2 call, 22 Jul 2026 |
| Sourced | Siemens Energy ~50 large gas turbines/yr from FY27 | Siemens Energy Q3 FY26 deck / pre-close call, 2026 |
| Sourced | Global gas turbine capacity ~60–70 GW/yr | Wood Mackenzie  |
| Sourced | Large power transformer lead time 18–36 months | Wood Mackenzie (as compiled 3 Oct 2026) |
| Sourced | NVIDIA content ~$40bn/GW Vera Rubin, ~$25bn/GW Grace Blackwell | Jensen Huang, NVDA Q2 FY27 call |
| Sourced | KGI CY2027: 5.89M Rubin + 2.85M Rubin Ultra | KGI, 15 Sep 2026 |
| Sourced | TSMC CoWoS ~140k wafers/month end-2026 → ~220k end-2027 | Institutional estimate, SECONDARY |
| Sourced | 2027 HBM demand 48.6–75.2bn Gb; Rubin 288 GB HBM4 | Our 2027 HBM demand model range (derived); Tom's Hardware |
| Sourced | Tesla installed capacity: Shanghai >950k, Fremont >550k, Berlin >375k Model Y, Texas >375k Model Y + >125k Cybertruck + >125k Cybercab, Nevada Semi 25k; Megapack 40 GWh (CA) + 50 GWh (TX) + 20 GWh (Shanghai); Optimus: early ramp (Fremont), construction (Texas) | Tesla Q3 2026 Update deck, 21 Oct 2026 |
| Sourced | Rival plans: OpenAI Stargate >9 GW across 7 US sites (~0.3 GW Abilene live); Oracle >10 GW over 3 yrs; Meta Prometheus 1 GW by Q3 2028 + Hyperion 1.632 GW by Q1 2028; Microsoft Fairwater WI 2.263 GW by Q2 2028 (fleet not sourced); AWS +3.8–3.9 GW TTM, doubling by end-2027; Anthropic ≥14.8 GW commitments (overlaps AWS/Google); Google 2026 capex $195–205bn (no GW given); CoreWeave 4.2 GW contracted / 1.5 GW active | (Epoch, DCD, BlockWest, SEDaily, Alphabet, CoreWeave, Oct 2026) |
| Derived | ~34 turbines/GW → ~29 MW per unit (Southaven mix); 10 blade sets per 290 MW plant | 1.2 GW ÷ 41 |
| Derived | GPUs per GW: GB300 ~410k, Vera Rubin ~270k (facility basis, PUE 1.3) | 13 GW breakdown (this doc, §4) (Supermicro, Nodus, Kuo) |
| Derived | HV transformers ~19–30 per GW (game uses 25); in-row CDUs ~556 per GW | 13 GW breakdown (this doc, §4) |
| Derived | NVIDIA 2027 output ≈ 34 GW/yr ≈ 8.5 GW per quarter | KGI units ÷ packages/GW (unit basis not confirmed) |
| Derived | GE Vernova ≈ 5 GW per quarter; transformer lead 6 quarters (low end of 18–36 months); Howmet/PCC blade lag 5 quarters (middle of 12–18 months) | Arithmetic on the figures above |
| Derived | Revenue ≈ $10bn per GW online per quarter | <1-year payback on ~$40bn/GW |
| Derived | Rival demand per quarter = remaining GW in plan ÷ quarters to target date (OpenAI ~1.1, Oracle ~0.8, AWS ~1.0, Anthropic ~1.2, Meta ~0.36, Microsoft ~0.27, CoreWeave ~0.34 GW/qtr); Google ~1 GW/qtr = $200bn capex ÷ $50bn/GW (upper-bound method) | Rival plans above |
| Game assumption | Pay on delivery; new orders blocked below −$60bn cash | Game balance |
| Game assumption | Starting cash $77.5bn ($40bn + the Q4 capex budget); funding $37.5bn/qtr (midpoint of capex guide) + revenue; optional raise of $40bn/qtr | Game balance |
| Game assumption | Share of each supplier's output open to new orders (GE Vernova 10%, Siemens/MHI 15%, aero 50% (v3b; was 35%), others 100%); OEM lead times; MHI 3 GW/qtr; Siemens 300 MW/unit; aero/industrial 2 GW/qtr | Game balance (real slot allocations unsourced) |
| Game assumption | CoWoS and HBM GW-equivalents (packages per wafer unsourced); SK hynix/Samsung/Micron 55/25/20 split; NVIDIA uses 65% of CoWoS and 60% of HBM | Game balance |
| Game assumption | Howmet/PCC 300 blade sets/qtr; transformer makers 7 GW-eq/qtr (spot 0.6 GW, 3 qtr, 3× price); cooling makers 9 GW-eq/qtr, 2 qtr lead | Game balance |
| Game assumption | All non-NVIDIA prices (turbines, shells, cooling, transformers, solar, techs), build times, and "Others" demand of 1.5 GW/qtr | Game balance |
| Game assumption | Southaven turbine cores are on site and OEM blades arrive Q2 2027; the existing 2.2 GW is self-sufficient in power, cooling and transformers | Game assumption (real status unsourced) |
| Game assumption | Megapack share for xAI 25% (60% with tech); solar farm = 500 MW + 2 GWh Megapack → 150 MW firm | Game balance |
| Game assumption | All tech-tree effects; inference box = 100 MW per fleet; orbital = 100 MW per launch batch | Game design. SPECULATIVE items are not real plans |
| Game assumption | All news events are fictional scenarios inspired by real constraints | Game design |
| Game assumption | v3 map buildings: casting shop +50 blade sets/qtr each (3 shops = the v2 tech's 150); turbine assembly hall assembles up to 1 GW of turbine plants per quarter; inference box factory up to 2 fleets/qtr; Starship pad up to 2 orbital batches/qtr; building costs, footprints and lead times | Game balance (v3), not sourced |
| Game assumption | v3b tuning (bot playtests showed a sensible strategy topped out near 6 GW by end-2027 once boxes needed power): (1) inference boxes must carry their own power: gas genset (0.1 GW cores + 3 blade sets + 0.4 GWh Megapack) or solar+storage (1.9 GWh Megapack), $1.5bn (was 0.4 GWh, $1bn, no power); (2) pre-booked turbine slots: 1.25 GW of cores per quarter arrive Q1–Q4 2027, paid at $1.5bn/GW, standing in for orders placed before Oct 2026 behind the sourced +20 GW 2027 power plan; (3) aero/industrial turbine share open to you 50% (was 35%); (4) casting-shop tech takes 1 quarter (was 2); (5) map enlarged to 64×40. No sourced or derived number was changed. Result: best bot strategy reaches 12.7–13.2 GW by end-2027 (wins on 4 of 5 event seeds, incl. the default; the miss ends at 12.7 GW) | Game balance (v3b), not sourced |
| Game assumption | One turbine assembly hall is pre-placed next to Southaven; supplier "import docks" on the map edge are a visual stand-in for the order books | Game design (v3) |


## 8. Current game state

- **v1 (/v1/):** compute and energy prototype with a sources panel.
- **v2 (/v2/):**
  - real October 2026 start state
  - supplier order books that rivals bid against
  - a labelled tech tree (ANNOUNCED / SPECULATIVE / MUSK IDEA)
  - the Musk inference-box quote
  - quarterly turns from Q4 2026 to Q4 2028, with the goal of 13 GW by Q4 2027
- **v3 (root):**
  - A visual top-down factory map (64×40 tiles) that you can pan and zoom.
  - Supplier "import docks" on the map edge.
  - Auto-routed animated belts carrying GPUs, HBM, cores, blades, transformers and CDUs.
  - Power lines and coolant pipes that turn red when they run short, and buildings that pulse when starved.
  - Buildings: data-center shell, rack hall, cooling plant, gas turbine plant, turbine assembly hall, blade & vane casting shop, transformer yard, solar + Megapack farm, inference box factory, Starship pad. The pre-placed Colossus 1+2 complex and Southaven turbine plant are there from the start.
- **v3b balance changes.** All are game assumptions; no sourced or derived number was changed.
  1. Inference boxes carry their own power: a gas genset (0.1 GW of cores + 3 blade sets + 0.4 GWh Megapack) or solar + storage (1.9 GWh), at $1.5bn each.
  2. 1.25 GW of turbine cores per quarter arrives Q1–Q4 2027. This stands in for orders placed before Oct 2026 behind the +20 GW 2027 power plan, and it is the biggest assumption.
  3. The share of aero/industrial turbine supply open to you rises from 35% to 50%.
  4. The casting tech takes 1 quarter instead of 2.
  5. The map is enlarged to 64×40.
  - UI changes: readable dock labels, a single-line header, a Fit button and WASD panning.
- **Bot playtests:**
  - v3 test bot: ~11.3 GW by late 2028, with long stretches in debt.
  - Before v3b, once boxes needed power, a sensible strategy topped out near 6 GW by end-2027.
  - After v3b, the smart bot reaches **12.7–13.2 GW by end-2027** and wins on 4 of 5 event seeds. The miss ends at 12.7 GW.
  - Bottlenecks, in order: blades → shells and cooling → NVIDIA GPU supply.
  - Tools: `tools/smart-bot.js`, `tools/header-check.js`.
- Screenshots are in `shots/`.

## 9. 3D tech choice, plan and pitfalls

**Search result.** There is no open-source Dyson Sphere Program clone or factory-on-a-globe game to fork.

**Shortlist:**
- **three.js:** https://github.com/mrdoob/three.js (recommended base)
- **three-globe:** https://github.com/vasturiano/three-globe, and globe.gl https://github.com/vasturiano/globe.gl, to bootstrap a working Earth quickly and eject later
- **NASA Blue Marble:** https://visibleearth.nasa.gov/collection/1484/blue-marble. Public-domain Earth textures, with no token and no quota.
- **Rejected:**
  - CesiumJS (https://github.com/CesiumGS/cesium): heavy, with terrain/tile streaming and an Ion token.
  - deck.gl (https://github.com/visgl/deck.gl): awkward for pickable game objects.
  - MapLibre (https://github.com/maplibre/maplibre-gl-js): tile-first, with custom 3D bolted on.
  - Godot and Unity WebGL: 10–40 MB of wasm, poor on phones.

**Recommended architecture (agreed in a second-opinion review):**
- **Sim core:**
  - Extract the existing tick loop into a pure JS module with no DOM or three.js references.
  - Run it in a Web Worker at a fixed timestep (~10 Hz), with a seeded RNG so the headless bot tests keep working.
  - Post snapshots as pre-allocated `Float32Array`s.
- **Globe = strategy layer:**
  - Sites at real lat/lon in one `InstancedMesh`.
  - Lanes as great-circle arcs baked into one BufferGeometry with a per-vertex `t` attribute, animated by a time uniform in the shader. This gives DSP-style flowing belts at near-zero CPU.
- **Site close-up = the current 2D map,** cross-faded in as the camera closes on a site. This is the single biggest decision.
- **Rendering details:**
  - Labels are a DOM overlay positioned by lat/lon → screen projection.
  - Build with Vite and deploy the bundle to Pages, dropping the single-file constraint.
  - Target 60 fps on an iPhone from the first globe build, with touch controls designed from scratch.

**Pitfalls:**
1. **Labels:** cull by camera-facing dot product and distance; cap visible labels at ~40.
2. **Per-frame allocation:** pre-allocate everything and mutate typed arrays.
3. **Texture memory:** use 2k textures as the baseline (KTX2/Basis), with hi-res as an opt-in. 8k textures run older iPhones out of memory.
4. **Shader scope creep:** one Fresnel atmosphere shell is enough.
5. **Geo traps:** slerp arcs rather than lerp them, handle the antimeridian wrap, and expect flaky picking near the limb.
6. **Token-gated basemaps** (Mapbox, Cesium Ion): avoid them entirely.
7. **Losing the bot tests:** split the sim from the renderer *first*.

**Staged plan:**
- **S1, headless split (1–2 weeks):**
  - Extract the sim core.
  - Add real coordinates and lane definitions.
  - Keep the 2D renderer wired to the new core, with bot tests green.
- **S2, globe shell:**
  - three.js globe, instanced sites and shader arcs.
  - Clicking a site opens the 2D view.
  - Deploy to Pages and test on a phone right away.
- **S3, legible logistics:**
  - Shipment packets and lane congestion colours.
  - Rival-bid events on the globe, a power/grid overlay, and a day/night terminator driven by the game clock.
- **S4, depth:** the tech tree on the globe layer (in-house blades and vanes, inference boxes, supplier contention).
- **S5, polish:**
  - KTX2 textures, label culling and an instancing audit.
  - Camera tours.
  - Touch controls: one-finger orbit, pinch zoom, tap to select.

## 10. Main public sources
- SpaceX Q3 2026 call transcript (Motley Fool, 20 Oct 2026): https://www.fool.com/earnings/call-transcripts/2026/10/20/spacex-spcx-q3-2026-earnings-call-transcript/
- SpaceX Q3 2026 results: https://s21.q4cdn.com/184289198/files/content_files/SpaceX-Reports-Third-Quarter-2026-Results.pdf
- Supermicro GB300 NVL72 datasheet: https://www.supermicro.com/datasheet/datasheet_SuperCluster_GB300_NVL72.pdf
- NVIDIA NVL72 reference architecture: https://docs.nvidia.com/enterprise-reference-architectures/nvl72-ai-factory/latest/components.html
- Nodus Partners, AI rack power: https://nodus.partners/insights/ai-rack-power
- CTEE / Kuo, VR200: https://www.ctee.com.tw/news/20260107701081-430704
- Tom's Hardware, Vera Rubin in depth: https://www.tomshardware.com/pc-components/gpus/nvidias-vera-rubin-platform-in-depth-inside-nvidias-most-complex-ai-and-hpc-platform-to-date
- Compute Atlas, Colossus 2 power station: https://www.compute-atlas.com/facilities/xai-colossus-2-power-station-southaven-ms
- Tom's Hardware, xAI turbines: https://www.tomshardware.com/tech-industry/xai-pushes-power-strategy-towards-1gw-ai-factory
- J. R. Sterling, substation MVA: https://julianrsterling.com/articles/data-centre-substation-size-mva/
- SemiAnalysis, Datacenter Anatomy part 1: https://newsletter.semianalysis.com/p/datacenter-anatomy-part-1-electrical
- Epoch AI, Stargate sites: https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand
- Engineering at Meta, Prometheus: https://engineering.fb.com/2026/10/19/data-center-engineering/inside-prometheus-meta-gigawatt-scale-supercluster/
- Plus the filings and calls named inline: Howmet 10-K/10-Q/calls, GE Vernova 2Q26, Siemens Energy CMD/consensus/AR, Tesla Q3 2026 update, KGI, CoreWeave, Oracle, AWS and Alphabet.
