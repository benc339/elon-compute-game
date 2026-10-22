# Race to SI: node list (v8)

**Rule.** A component gets its own building/node only if it meets at least one of these:
1. **Chokepoint:** few suppliers or places, or long lead times.
2. **West vs East difference:** the West and its allies lead in EUV, HBM and leading-edge logic; China leads in power build-out, polysilicon, rare earths and Ga/Ge.
3. **Stock- or capex-moving** under the AI buildout.
4. **Big visible physical transformation.**

Everything commoditized or substitutable folds into one money-bought resource, **Industrial inputs**.

**Opus refinement (adopted).** (1) or (2) is the gate. (3) and (4) only promote a borderline item. Two tags are added:
- **(D) denial leverage:** one side can switch it off.
- **(R) rate-setting:** it gates throughput of everything downstream.

Status: **MVP** means built in v8 · otherwise planned. "S" = sourced claim, "?" = to verify before the node ships.

| # | Layer | Node | Criteria | Real example | Status / source |
|---|---|---|---|---|---|
| 1 | Power | Large gas turbine plant | 1,3,4 | GE Vernova, Siemens Energy, Mitsubishi | **MVP** · S: EIA AEO2026 EMM Table 3 (2-yr lead time) |
| 2 | Materials | MG-silicon submerged-arc smelter | 2,4 | Ferroglobe, Elkem, PCC BakkiSilicon | **MVP** · S: ScienceDirect 2018 / Springer 2024 (11–13 MWh/t); PCC SE (3-yr build) · ? China share of MG-Si |
| 3 | Materials | Siemens polysilicon plant | 1,2,4 | Hemlock (MI), Wacker (DE/TN) | **MVP** · S: Fraunhofer ISE 2025 (60–71 kWh/kg, process); PV Tech/Bernreuter (China ~90% capacity 2023); ChemSusChem 2023 (~3-yr build) |
| 4 | Materials | Spruce Pine high-purity quartz | 1,4 (D) | Sibelco, The Quartz Corp | **MVP** · S: Sibelco IOTA; Helene shutdown Sept 2024 |
| 5 | Materials | Fused-quartz crucible shop | 1 (R) | Shin-Etsu Quartz, Tosoh Quartz | **MVP** · S: Kiel CZ review (silica crucible in CZ) · ? supplier concentration |
| 6 | Wafers | Czochralski crystal puller (300 mm ingot) | 1,4 | SUMCO, Shin-Etsu Handotai, GlobalWafers; pullers PVA TePla | **MVP** · S: Kiel review/Wacker (2 m, 265 kg); GlobalWafers Japan (>300 kg); GlobalWafers Sherman (29.5-mo build) |
| 7 | Wafers | Slice / polish / epi (prime 300 mm wafer) | 1,2,4 | Shin-Etsu, SUMCO, GlobalWafers, Siltronic, SK Siltron | next layer · ? top-5 share |
| 8 | Materials | Gallium & germanium | 2 (D) | China export controls 2023; Nyrstar Clarksville | planned · ? |
| 9 | Materials | Rare earths + magnets | 1,2 (D) | MP Materials | planned · ? |
| 10 | Fab tools | ASML EUV scanner integration | 1,2,3,4 | ASML Veldhoven | planned · S: ASML sole EUV maker; Dutch export rules |
| 11 | Fab tools | Zeiss SMT EUV optics | 1,2 (R) | Carl Zeiss SMT, Oberkochen | planned · ? |
| 12 | Fab tools | EUV light source (LPP tin droplet) | 1,4 | Cymer (ASML), San Diego; Trumpf CO₂ laser | planned · ? |
| 13 | Fab tools | Mask blanks / pellicles | 1 | Hoya, AGC | planned · ? |
| 14 | Fab tools | Deposition & etch | 1,3 | Applied Materials, Lam, TEL | planned · ? |
| 15 | Fab tools | Metrology & inspection | 1,3 | KLA | planned · ? |
| 16 | Design | EDA + CPU IP | 1,2 (D) | Synopsys, Cadence, Arm | planned · ? (Opus addition) |
| 17 | Chemicals | EUV/ArF photoresist | 1,2 | JSR, TOK, Shin-Etsu Chemical | planned · ? |
| 18 | Chemicals | Electronic gases (Ne, He, NF₃, HF) | 1,2 (D) | Linde, Air Liquide; 2022 Ukraine neon shock; 2019 Japan–Korea HF | planned · ? |
| 19 | Logic | Leading-edge logic fab | 1,2,3,4 | TSMC (Fab 18, Arizona), Intel 18A, Samsung | planned · S: TSMC AZ timeline (v7) |
| 20 | Memory | DRAM fab | 1,2,3 | SK hynix, Samsung, Micron | planned · S: SK hynix M15X timeline (v7) |
| 21 | Memory | HBM TSV stacking + test | 1,2,3 (R) | SK hynix, Micron, Samsung | planned · S: NVIDIA B200 8× HBM3E |
| 22 | Packaging | CoWoS advanced packaging | 1,2,3 (R) | TSMC AP6/AP7 Chiayi, ASE, Amkor | planned · S: TSMC AP7 timeline (v7) |
| 23 | Packaging | ABF substrate | 1 | Ajinomoto (film), Ibiden, Unimicron | planned · ? |
| 24 | Power | Grid interconnect + permitting | 1,3 | PJM / ERCOT queues | planned · S: Berkeley Lab "Queued Up" 2024; Oxford Global Projects (3-yr lines) |
| 25 | Power | Large power transformers & switchgear | 1,3 | Hitachi Energy, Siemens Energy | planned · ? (Opus addition) |
| 26 | Data center | AI data center hall | 3,4 | xAI Colossus, Microsoft, AWS | planned (v7 system) · S: Colossus 122 days |
| 27 | Data center | Liquid cooling / CDU | 3 | Vertiv, Schneider | planned, low priority |
| 28 | East | China rival cluster (power-rich, no EUV/HBM) | 2 | Huawei Ascend / SMIC | later rival · ? |

## Folded into "Industrial inputs" (money-bought)

- **Silicon chain:** quartzite gravel, coal/coke/charcoal/wood-chip reductants, carbon/graphite electrodes, HCl, H₂, bulk Ar/N₂/O₂, dopants.
- **Fab and cleanroom:** isostatic graphite hot zones, ultrapure water, CMP slurry and pads, diamond wire, vacuum pumps and valves.
- **Construction and electronics:** steel, concrete, copper, cleanroom construction, PCBs and passives, NAND, commodity OSAT assembly, trucking.

The game price is $150/t, which is an assumption.

## MVP decision (v8)

- **Chain:** turbine → (inputs yard) → smelter → polysilicon; Spruce Pine HPQ → crucible shop; poly + crucible → CZ puller.
- **First capstone goal:** **Pull your first 300 mm ingot**, followed by 1,000 ingots.
- **Wafer slicing** opens the next layer.
- **Ratios used in-game:** sourced per-tonne energy for the smelter (12 MWh/t) and poly (60 kWh/kg). The other ratios and capacities are labelled assumptions in the in-game Sources panel.

## Gas turbine sub-chain (v9)

Framing (Bence, 22 Oct 2026): the player is the **whole West** vs China. Market rivals are non-AI demand plus China, not Western firms.

| # | Layer | Node | Criteria | Real examples | Status · source |
|---|---|---|---|---|---|
| 29 | Power | Superalloy vacuum melt (Ni/Co + **rhenium**) | 1,2 | PCC Special Metals, Cannon-Muskegon, Howmet | built v9 · S: USGS MCS 2026 rhenium (~81 t world mine output 2025, ~80% of use in superalloys, ~$2,600/kg). Rhenium is a bought input with a per-kg cash cost, not its own node (Opus agreed) |
| 30 | Power | **Blade & vane foundry** (single-crystal investment casting, ceramic cores) — CHOKEPOINT | 1,2,3,4 | PCC Airfoils, Howmet, Doncasters; SpaceX Bastrop (planned) | built v9 · S: Musk Jan 2026 ("only three casting companies… massively backlogged"); Musk on X Aug 2026 via TechCrunch/BI (Bastrop foundry, "up to 18 months"); In Practise (PCC+Howmet ~80%, one interviewee). Bastrop $280M **disputed**: FMT Sept 2026 vs Texas Governor 12 Mar 2025 (semiconductor/packaging) |
| 31 | Power | Turbine assembly (blades + rotor forgings, casings, generator) | 1,3 | GE Vernova, Siemens Energy, Mitsubishi Power | built v9 · S: GE Vernova Q2 2025 (29 GW backlog + 25 GW reservations); Bloomberg 23 Apr 2025 (2028 deliveries, 2030 talks); EPRI via Reuters 21 Jul 2025 (5+ yrs large units) |
| 32 | Power | Large rotor/disc forgings & heavy presses | 1,2 | heavy-press operators (Opus suggestion) | **folded into industrial inputs for now**; candidate node, no source gathered yet |
| 33 | Power | Ceramic cores/core dies, TBC coatings, cooling-hole drilling, VIM/SX furnaces | 1 | (Opus suggestions) | folded into the foundry; candidate sub-nodes, unsourced |

**Opening choice:** the first 2 turbines are **pre-delivered** (ordered before the game starts, assumption). Layer 1 needs 48 MW = 2 × 25 MW, so the opening stays DSP-simple. More turbines come from the **world turbine market** (queue or outbid). The cast-blade chain unlocks after the 3rd turbine, as the next layer.

**Market mechanic (generic, buyer list is data in `MKT`):** each part (turbines, blade & vane sets) has world supply/month and rival demand categories (Utilities & industry, Aviation, China) with growth rates. Price = base × (total demand / supply)^0.8. Each month supply goes first to outbid orders (+60% premium), then pro rata between your line orders and rival demand. The panel shows price, trend, allocation split (West AI / Aviation / Utilities & industry / China), your place in line and the estimated wait. Supply, demand weights, growth, elasticity and premium are **game assumptions**.

## v10: no wiring

Manual grid lines are gone. All finished turbines feed **one global power pool**, and every building draws from it. Wiring was annoying and isn't a real chokepoint. Belts stay for material flow but are auto-routed.

**Planned later node: the real grid chokepoint** (interconnection queues, large power transformers and switchgear, nodes 24–25). It will be a **timer/permit** (queue wait before new MW counts), not wiring. Sources so far: Berkeley Lab "Queued Up" 2024 for queues; the transformer lead times still need sourcing.

**Market pricing (v10, Bence):** price = base × ((your orders + non-AI baseline + China) ÷ supply)^1. Your demand is open orders plus a 6-month decaying order rate. The non-AI baseline grows slowly (0.4%/mo; China 0.8%/mo). Supply is fixed and small: 1.2 turbines/mo, 2 blade sets/mo. In-house output adds to supply and eases the price. The panel shows "Your buildout drives X% of demand". All of these numbers are assumptions; context: GE Vernova backlog, few casters.

## v11: no money — throughput, external supply, tech tree

Bence: the player is the whole West, so prices are pointless. Removed: cash, income, prices, building costs, the outbid/sell buttons and market pricing.

- **Throughput:** buildings cost only build time. Industrial inputs flow in at a fixed rate from the inputs yard (commodity source, not bought).
- **External supply (fixed-rate deliveries):** world gas-turbine output reaches the West AI buildout at **1 per 8 months**, and blade & vane sets at **1 per 2 months** (after single-crystal research). Both rates are game assumptions; context: GE Vernova backlog, EPRI 5+ years. Making them in-house (assembly, foundry) is how you grow faster.
- **Shortages** show as starved buildings, power-limited buildings and delivery countdowns, not prices.
- **Tech tree (R&D lab, 2 MW, 1 research-month per month):**
  - Siemens process (4) → Fused-quartz crucibles (3) → Czochralski 300 mm (5)
  - → Rhenium superalloys (8) → Single-crystal casting (12, needs 20 t superalloy)
  - → Wafer slicing (16, needs 5,000 ingots) → EUV (later layer)
  - All research times and thresholds are game assumptions.
- **Goals (10):** turbine → MG-Si → research Siemens → poly → crucibles → first ingot → third turbine → first blade set → in-house turbine → research wafer slicing.
