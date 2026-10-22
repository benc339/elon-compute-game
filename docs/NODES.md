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
