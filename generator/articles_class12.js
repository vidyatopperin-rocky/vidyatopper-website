// generator/articles_class12.js

module.exports = [
  {
    slug: 'class-12-physics-electrostatics-formulas-derivations',
    title: 'Class 12 Physics Electrostatics Notes – Gauss Law & Capacitance Derivations',
    shortTitle: 'Class 12 Electrostatics',
    description: 'Master CBSE Class 12 Physics Chapter 1 & 2 Electrostatics. Complete notes on Coulomb’s law, electric field due to dipole, Gauss’s theorem derivations, and parallel plate capacitor with dielectric slab.',
    keywords: 'class 12 physics electrostatics notes, gauss law derivations electric field, parallel plate capacitor dielectric formula, electric dipole axial equatorial field, cbse class 12 physics',
    badge: 'CBSE Class 12 Physics',
    h1: '⚡ Class 12 Physics: Electrostatics Formulas & Core Derivations',
    subtitle: 'From Coulomb’s inverse square law and Gauss’s law applications to capacitance derivations.',
    updated: 'Academic Session 2025–2026 | CBSE Board Aligned',
    category: 'Class 12 Science',
    highlight: '🎯 <strong>Top 5-Mark Derivations:</strong> (1) Electric field at axial and equatorial points of an electric dipole; (2) Electric field due to infinitely long charged wire using Gauss law; (3) Capacitance of a parallel plate capacitor with dielectric slab.',
    sections: [
      {
        h2: '1. Coulomb’s Law & Electric Dipole Derivations',
        contentHtml: `
          <p><strong>Coulomb’s Inverse Square Law:</strong> Electrostatic force between two stationary point charges <code>q₁</code> and <code>q₂</code> separated by distance <em>r</em> in vacuum is:</p>
          <div style="background:var(--bg); padding:14px; border:1px solid var(--bdr); border-radius:12px; margin-bottom:12px;">
            <code>F = [ 1 / (4πε₀) ] · [ |q₁ · q₂| / r² ]</code>
            <br/><span style="font-size:0.85rem; color:var(--sub);">(where 1/(4πε₀) = 9 × 10⁹ N·m²/C², and ε₀ = 8.854 × 10⁻¹² C²·N⁻¹·m⁻²)</span>
          </div>
          <p><strong>Electric Field of an Electric Dipole (Dipole moment p = q · 2a):</strong></p>
          <ul>
            <li><strong>At Axial Point (End-on position, distance r from center where r >> a):</strong>
              <br/><code>E_axial = [ 1 / (4πε₀) ] · [ 2p / r³ ]</code> (Points in the direction of dipole moment p).</li>
            <li><strong>At Equatorial Point (Broadside-on position, r >> a):</strong>
              <br/><code>E_equatorial = [ 1 / (4πε₀) ] · [ p / r³ ]</code> (Points opposite to the direction of dipole moment p).</li>
            <li><strong>Ratio:</strong> <code>E_axial = 2 · E_equatorial</code>.</li>
            <li><strong>Torque on Dipole in Uniform Electric Field:</strong> <code>τ = p × E = pE · sin(θ)</code>. Potential energy stored: <code>U = -p · E = -pE · cos(θ)</code>.</li>
          </ul>
        `
      },
      {
        h2: '2. Gauss’s Theorem & High-Yield Applications',
        contentHtml: `
          <p><strong>Gauss’s Law Statement:</strong> The total electric flux <code>Φ_E</code> through any closed Gaussian surface enclosing net charge <code>q_enclosed</code> is equal to <code>1/ε₀</code> times the enclosed charge:</p>
          <div style="background:var(--p-light); padding:12px 18px; border-radius:10px; margin-bottom:12px;">
            <code>Φ_E = ∮ E · dA = q_enclosed / ε₀</code>
          </div>
          <p><strong>Crucial Applications (Frequently Tested in 3 & 5 Marks):</strong></p>
          <ul>
            <li><strong>Infinitely Long Straight Charged Wire (Linear charge density λ = q/L):</strong>
              <br/>Construct a coaxial cylindrical Gaussian surface of radius <em>r</em> and length <em>l</em>:
              <br/><code>E · (2πrl) = (λl) / ε₀  ⟹  E = λ / (2πε₀r)</code></li>
            <li><strong>Uniformly Charged Infinite Plane Sheet (Surface charge density σ = q/A):</strong>
              <br/>Cylindrical Gaussian pillbox intersecting sheet:
              <br/><code>2 · E · A = (σA) / ε₀  ⟹  E = σ / (2ε₀)</code> (Independent of distance <em>r</em> from sheet).</li>
          </ul>
        `
      },
      {
        h2: '3. Parallel Plate Capacitor with Dielectric Slab',
        contentHtml: `
          <p>Capacitance is the ratio of charge to potential: <code>C = Q / V</code> (Unit: Farad, F).</p>
          <p><strong>1. Capacitor with Air/Vacuum:</strong> <code>C₀ = (ε₀ · A) / d</code></p>
          <p><strong>2. With Dielectric Slab of thickness t (t &lt; d) and Dielectric Constant K:</strong></p>
          <div style="background:var(--bg); padding:16px; border:1px solid var(--bdr); border-radius:12px; line-height:1.7;">
            <p>Electric field in vacuum = <code>E₀ = σ/ε₀</code>; Electric field inside dielectric = <code>E = E₀/K</code>.</p>
            <p>Potential difference: <code>V = E₀(d - t) + E·t = E₀[ (d - t) + t/K ] = (Q / ε₀A)[ (d - t) + t/K ]</code>.</p>
            <p>Capacitance: <code>C = Q / V = (ε₀ · A) / [ (d - t) + (t / K) ]</code>.</p>
            <p>If dielectric fills the entire space (t = d): <code>C = K · C₀</code> (Capacitance increases K times).</p>
          </div>
          <p><strong>Energy Stored in Capacitor:</strong> <code>U = ½ CV² = ½ (Q² / C) = ½ QV</code>. Energy density: <code>u = ½ ε₀E²</code>.</p>
        `
      }
    ],
    faq: [
      {
        question: 'Why is the electric field inside a hollow charged spherical conductor zero?',
        answer: 'By Gauss law, ∮ E·dA = q_enclosed / ε₀. Inside a hollow spherical conductor, all electric charges reside exclusively on the outer surface of the conductor (q_enclosed = 0). Therefore, the electric field inside is identically zero (E = 0). This phenomenon is utilized in Electrostatic Shielding.'
      },
      {
        question: 'What happens to the capacitance, charge, and energy when a dielectric is inserted with battery disconnected?',
        answer: 'With battery disconnected: (1) Charge Q remains constant; (2) Capacitance increases: C = K·C₀; (3) Potential difference decreases: V = V₀/K; (4) Energy stored decreases: U = U₀/K (work done by attractive electrostatic forces pulling the slab inside).'
      }
    ],
    relatedSlugs: [
      'class-12-physics-current-electricity-kirchhoff-rules',
      'class-12-chemistry-solutions-colligative-properties',
      'class-12-maths-calculus-derivatives-integrals-formula'
    ]
  },
  {
    slug: 'class-12-physics-current-electricity-kirchhoff-rules',
    title: 'Class 12 Physics Current Electricity – Kirchhoff’s Rules & Wheatstone Bridge',
    shortTitle: 'Class 12 Current Electricity',
    description: 'Master CBSE Class 12 Physics Chapter 3 Current Electricity. Complete guide to drift velocity derivation, Ohm’s law microscopic form, Kirchhoff’s Junction and Loop rules, and Wheatstone bridge balance.',
    keywords: 'current electricity class 12 physics notes, drift velocity derivation vd = eeτ/m, kirchhoffs laws circuit numericals, wheatstone bridge balanced condition proof p/q = r/s, meter bridge',
    badge: 'CBSE Class 12 Physics',
    h1: '⚡ Current Electricity: Drift Velocity, Kirchhoff’s Laws & Bridges',
    subtitle: 'From microscopic electron conduction to solving complex multi-loop circuits and bridges.',
    updated: 'Academic Session 2025–2026 | CBSE Board Aligned',
    category: 'Class 12 Science',
    highlight: '💡 <strong>Circuit Solving Tip:</strong> Kirchhoff’s 1st Law (Junction Rule) is based on the <em>Conservation of Charge</em>. Kirchhoff’s 2nd Law (Loop Rule) is based on the <em>Conservation of Energy</em>.',
    sections: [
      {
        h2: '1. Drift Velocity & Microscopic Derivation of Ohm’s Law',
        contentHtml: `
          <p><strong>Drift Velocity (v_d):</strong> The average velocity with which free conduction electrons get drifted towards the positive terminal of a conductor under an applied electric field.</p>
          <div style="background:var(--bg); padding:14px; border:1px solid var(--bdr); border-radius:12px; margin-bottom:12px;">
            <code>v_d = - (e · E · τ) / m</code>
            <br/><span style="font-size:0.85rem; color:var(--sub);">(where e = elementary charge, E = electric field, m = electron mass, τ = average relaxation time)</span>
          </div>
          <p><strong>Relation Between Electric Current (I) and Drift Velocity (v_d):</strong></p>
          <div style="background:var(--p-light); padding:12px 18px; border-radius:10px; margin-bottom:12px;">
            <code>I = n · e · A · v_d</code>  ⟹  Current Density: <code>J = I / A = n · e · v_d</code>
          </div>
          <p><strong>Derivation of Resistivity:</strong> Substituting <code>v_d = (eEτ)/m</code>:
            <br/><code>I = n · e · A · [ (e · V · τ) / (m · L) ]  ⟹  V / I = [ m / (n · e² · τ) ] · (L / A)</code>
            <br/>Comparing with <code>R = ρ(L/A)</code>, we obtain electrical resistivity: <code>ρ = m / (n · e² · τ)</code>.
          </p>
        `
      },
      {
        h2: '2. Kirchhoff’s Circuit Laws & Sign Conventions',
        contentHtml: `
          <ul>
            <li><strong>Kirchhoff’s First Rule (Junction Rule / Current Law - KCL):</strong> In any electrical network, the algebraic sum of currents meeting at any junction is zero: <code>∑ I = 0</code>. (Sum of currents entering a junction = Sum of currents leaving). Represents <strong>Conservation of Electric Charge</strong>.</li>
            <li><strong>Kirchhoff’s Second Rule (Loop Rule / Voltage Law - KVL):</strong> The algebraic sum of changes in potential around any closed loop involving resistors and cells in the loop is zero: <code>∑ ΔV = ∑ E - ∑ (I·R) = 0</code>. Represents <strong>Conservation of Energy</strong>.</li>
          </ul>
        `
      },
      {
        h2: '3. Wheatstone Bridge Balanced Condition Derivation',
        contentHtml: `
          <p>A Wheatstone bridge consists of four resistors P, Q, R, and S arranged in a quadrilateral ABCD with a galvanometer G connected between B and D:</p>
          <div style="background:var(--card-bg); border:1.5px solid var(--bdr); padding:16px; border-radius:12px; line-height:1.7;">
            <p>Under balanced condition, no current flows through the galvanometer: <code>I_g = 0  ⟹  V_B = V_D</code>.</p>
            <p>Applying Loop Rule to Loop ABDA: <code>-I₁·P + I₂·R = 0  ⟹  I₁·P = I₂·R</code> ... (Equation 1)</p>
            <p>Applying Loop Rule to Loop BCDB: <code>-I₁·Q + I₂·S = 0  ⟹  I₁·Q = I₂·S</code> ... (Equation 2)</p>
            <p>Dividing Equation 1 by Equation 2: <code>(I₁·P) / (I₁·Q) = (I₂·R) / (I₂·S)  ⟹  P / Q = R / S</code></p>
            <p>This is the famous <strong>Wheatstone Bridge Balance Condition</strong>. Used in Meter Bridge experiments to accurately determine unknown resistance.</p>
          </div>
        `
      }
    ],
    faq: [
      {
        question: 'Why does the resistance of a metallic conductor increase with rising temperature?',
        answer: 'Electrical resistance is inversely proportional to relaxation time: R ∝ 1/τ. When temperature increases, metallic positive ions vibrate with greater thermal amplitude, increasing the collision frequency of free conduction electrons. This sharply reduces the average relaxation time (τ), thereby increasing resistance and resistivity.'
      },
      {
        question: 'Differentiate between EMF and Terminal Potential Difference of a battery cell.',
        answer: 'Electromotive Force (EMF, E) is the maximum potential difference between the electrodes of a cell in an open circuit when no current is drawn. Terminal Potential Difference (V) is the voltage across the electrodes when the cell is discharging through an external circuit: V = E - I·r (where r is internal resistance).'
      }
    ],
    relatedSlugs: [
      'class-12-physics-electrostatics-formulas-derivations',
      'class-12-chemistry-chemical-kinetics-rate-laws',
      'class-12-maths-calculus-derivatives-integrals-formula'
    ]
  },
  {
    slug: 'class-12-chemistry-solutions-colligative-properties',
    title: 'Class 12 Chemistry Solutions – Raoult’s Law & Colligative Properties Formulas',
    shortTitle: 'Class 12 Solutions (Chemistry)',
    description: 'Master CBSE Class 12 Chemistry Chapter 1 Solutions. Henry’s Law, Raoult’s law for volatile solutes, ideal vs non-ideal solutions, 4 colligative properties, and Van’t Hoff factor i calculations.',
    keywords: 'class 12 chemistry solutions chapter notes, raoults law formula, colligative properties relative lowering boiling point depression freezing, vant hoff factor i abnormal molar mass',
    badge: 'CBSE Class 12 Chemistry',
    h1: '🧪 Solutions: Concentration Terms, Raoult’s Law & Colligative Properties',
    subtitle: 'Master vapor pressure deviations, colligative derivations, and abnormal molar mass calculations.',
    updated: 'Academic Session 2025–2026 | CBSE Board Aligned',
    category: 'Class 12 Science',
    highlight: '🎯 <strong>Formula Bank:</strong> (1) ΔP/P₁° = i · x₂; (2) ΔTb = i · Kb · m; (3) ΔTf = i · Kf · m; (4) π = i · C · R · T. Never forget the Van’t Hoff factor i for ionic electrolytes!',
    sections: [
      {
        h2: '1. Henry’s Law & Raoult’s Law',
        contentHtml: `
          <p><strong>Henry’s Law:</strong> At constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the liquid surface: <code>p = K_H · x</code> (where K_H is Henry's law constant; higher K_H means lower gas solubility at a given pressure).</p>
          <p><strong>Raoult’s Law for Liquid-Liquid Volatile Solutions:</strong> For any volatile component in solution, its partial vapor pressure is directly proportional to its mole fraction: <code>p₁ = p₁° · x₁</code> and <code>p₂ = p₂° · x₂</code>.</p>
          <p><strong>Ideal vs. Non-Ideal Solutions:</strong></p>
          <ul>
            <li><strong>Ideal Solutions:</strong> Obey Raoult’s law across all concentrations. <code>ΔH_mix = 0</code>, <code>ΔV_mix = 0</code>. A-B intermolecular attractions equal A-A and B-B. Example: <em>n-hexane + n-heptane</em>, <em>benzene + toluene</em>.</li>
            <li><strong>Non-Ideal with Positive Deviation:</strong> A-B attractions are weaker than pure components. <code>ΔH_mix > 0</code>, <code>ΔV_mix > 0</code>. Forms minimum boiling azeotropes. Example: <em>Ethanol + Acetone</em>.</li>
            <li><strong>Non-Ideal with Negative Deviation:</strong> A-B attractions are stronger (hydrogen bonding). <code>ΔH_mix < 0</code>, <code>ΔV_mix < 0</code>. Forms maximum boiling azeotropes. Example: <em>Chloroform + Acetone</em>.</li>
          </ul>
        `
      },
      {
        h2: '2. The Four Colligative Properties',
        contentHtml: `
          <p>Colligative properties depend <strong>solely on the total number of solute particles</strong> present in solution, independent of their chemical nature:</p>
          <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem;">
            <thead>
              <tr style="background:var(--p-light); text-align:left;">
                <th style="padding:10px; border:1px solid var(--bdr);">Colligative Property</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Mathematical Equation</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Calculation of Solute Molar Mass (M₂)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>1. Relative Lowering of Vapor Pressure (RLVP)</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>(P₁° - P₁) / P₁° = i · x₂</code></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>M₂ = [ (W₂ · M₁) / W₁ ] × [ P₁° / (P₁° - P₁) ]</code></td>
              </tr>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>2. Elevation of Boiling Point</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>ΔT_b = T_b - T_b° = i · K_b · m</code></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>M₂ = (1000 · K_b · W₂) / (ΔT_b · W₁)</code></td>
              </tr>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>3. Depression of Freezing Point</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>ΔT_f = T_f° - T_f = i · K_f · m</code></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>M₂ = (1000 · K_f · W₂) / (ΔT_f · W₁)</code></td>
              </tr>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>4. Osmotic Pressure (π)</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>π = i · C · R · T = i · (n₂ / V) · R · T</code></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>M₂ = (W₂ · R · T) / (π · V)</code> (Ideal method for determining molar mass of proteins and polymers)</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        h2: '3. Van’t Hoff Factor (i) & Abnormal Molar Mass',
        contentHtml: `
          <p>The <strong>Van’t Hoff factor (i)</strong> accounts for association or dissociation of ionic solute particles in solution:</p>
          <div style="background:var(--bg); padding:14px; border:1px solid var(--bdr); border-radius:12px; margin-bottom:12px;">
            <code>i = (Normal / Theoretical Molar Mass) / (Observed / Experimental Molar Mass)</code>
            <br/>
            <code>i = Total number of moles of particles after association/dissociation / Initial moles</code>
          </div>
          <ul>
            <li><strong>For Dissociation (Electrolytes like NaCl, K₂SO₄):</strong> <code>i = 1 + (n - 1)α</code> (where <em>n</em> = number of ions produced, <em>α</em> = degree of dissociation). For complete dissociation of NaCl (n=2), <code>i = 2</code>; for K₂SO₄ (n=3), <code>i = 3</code>.</li>
            <li><strong>For Association (Carboxylic acids dimerizing in benzene):</strong> <code>i = 1 - (1 - 1/n)α</code>. For dimerization of acetic acid in benzene (n=2), <code>i < 1</code> (~0.5).</li>
          </ul>
        `
      }
    ],
    faq: [
      {
        question: 'Why is osmotic pressure measurement preferred over other colligative properties for polymers and biomolecules?',
        answer: 'Osmotic pressure is measured at room temperature (preventing thermal denaturation of sensitive proteins) and uses molarity (which is convenient to measure). Furthermore, biomacromolecules have enormous molar masses, resulting in negligibly small boiling point elevation or freezing depression, whereas osmotic pressure generates measurable magnitude even in dilute solutions.'
      },
      {
        question: 'What are isotonic solutions? What happens when RBC is placed in hypertonic saline?',
        answer: 'Two solutions having identical osmotic pressure at the same temperature are called isotonic solutions; no net osmosis occurs between them. When a Red Blood Cell (RBC) is placed in hypertonic saline (>0.9% NaCl), water flows out of the cell via exosmosis, causing the RBC to shrink and crenate.'
      }
    ],
    relatedSlugs: [
      'class-12-chemistry-chemical-kinetics-rate-laws',
      'class-12-physics-electrostatics-formulas-derivations',
      'cbse-class-10-science-important-questions'
    ]
  },
  {
    slug: 'class-12-chemistry-chemical-kinetics-rate-laws',
    title: 'Class 12 Chemical Kinetics Notes – Rate Laws, Half-Life & Arrhenius Equation',
    shortTitle: 'Class 12 Chemical Kinetics',
    description: 'Master CBSE Class 12 Chemistry Chapter 3 Chemical Kinetics. Integrated rate equations for Zero and First-order reactions, Half-life derivations, Pseudo first-order reactions, and Arrhenius activation energy.',
    keywords: 'chemical kinetics class 12 chemistry notes, integrated rate law first order derivation, half life formula t1/2, arrhenius equation activation energy graph, order vs molecularity',
    badge: 'CBSE Class 12 Chemistry',
    h1: '⏱️ Chemical Kinetics: Rate Laws, Half-Life & Arrhenius Equation',
    subtitle: 'From differential rate expressions to graphical analysis of zero and first-order reaction kinetics.',
    updated: 'Academic Session 2025–2026 | CBSE Board Aligned',
    category: 'Class 12 Science',
    highlight: '🎯 <strong>Top Board Derivations:</strong> Integrated rate law for first-order reaction k = (2.303/t) log([R]₀/[R]) and proof that t_99.9% = 10 × t_50% appear frequently in exams.',
    sections: [
      {
        h2: '1. Rate of Reaction, Order and Molecularity',
        contentHtml: `
          <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem;">
            <thead>
              <tr style="background:var(--p-light); text-align:left;">
                <th style="padding:10px; border:1px solid var(--bdr);">Feature</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Order of Reaction</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Molecularity of Reaction</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>Definition</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);">Sum of powers of concentration terms of reactants in the experimentally determined rate law.</td>
                <td style="padding:10px; border:1px solid var(--bdr);">Number of colliding reacting species that collide simultaneously to bring about an elementary chemical change.</td>
              </tr>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>Nature of Value</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);">Purely experimental property; can be <strong>zero, integer, or fractional</strong>.</td>
                <td style="padding:10px; border:1px solid var(--bdr);">Theoretical property; only positive integers (1, 2, 3); <strong>cannot be zero or fractional</strong>.</td>
              </tr>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>Applicability</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);">Applicable to both elementary and complex multi-step reactions.</td>
                <td style="padding:10px; border:1px solid var(--bdr);">Meaningful only for elementary reactions (has no meaning for complex reactions).</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        h2: '2. Integrated Rate Equations for Zero & First Order Reactions',
        contentHtml: `
          <p><strong>A. Zero-Order Reaction (Rate = k[R]⁰ = k):</strong></p>
          <div style="background:var(--bg); padding:14px; border:1px solid var(--bdr); border-radius:12px; margin-bottom:12px;">
            <code>[R] = [R]₀ - k · t  ⟹  k = ([R]₀ - [R]) / t</code>
            <br/>
            <strong>Half-Life (t½):</strong> <code>t½ = [R]₀ / (2k)</code> (Directly proportional to initial reactant concentration).
            <br/><em>Units of k:</em> <code>mol · L⁻¹ · s⁻¹</code>.
          </div>
          <p><strong>B. First-Order Reaction (Rate = k[R]¹):</strong></p>
          <div style="background:var(--p-light); padding:14px 18px; border-radius:12px; margin-bottom:12px;">
            <code>k = (2.303 / t) · log₁₀ [ [R]₀ / [R] ]</code>
            <br/>
            <strong>Half-Life (t½):</strong> <code>t½ = (2.303 · log 2) / k = 0.693 / k</code>
            <br/><span style="font-weight:700; color:var(--text);">Notice: Half-life of a first-order reaction is completely INDEPENDENT of initial concentration [R]₀!</span>
            <br/><em>Units of k:</em> <code>s⁻¹</code> (or min⁻¹).
          </div>
        `
      },
      {
        h2: '3. Temperature Dependence & Arrhenius Equation',
        contentHtml: `
          <p>For most chemical reactions, reaction rate roughly doubles for every 10°C rise in temperature. Svante Arrhenius quantified this temperature dependence:</p>
          <div style="background:var(--bg); padding:14px; border:1px solid var(--bdr); border-radius:12px; margin-bottom:12px;">
            <code>k = A · e^(-Ea / RT)</code>
            <br/><span style="font-size:0.85rem; color:var(--sub);">(where A = Arrhenius pre-exponential frequency factor, Ea = Activation Energy in J/mol, R = 8.314 J·K⁻¹·mol⁻¹)</span>
          </div>
          <p><strong>Logarithmic Two-Temperature Form (For Exam Calculations):</strong></p>
          <div style="background:var(--card-bg); border:1.5px solid var(--bdr); padding:14px; border-radius:10px;">
            <code>log₁₀(k₂ / k₁) = (Ea / 2.303 R) · [ (T₂ - T₁) / (T₁ · T₂) ]</code>
          </div>
        `
      }
    ],
    faq: [
      {
        question: 'Prove that the time required to complete 99.9% of a first-order reaction is 10 times its half-life (t½).',
        answer: 'For 99.9% completion: [R] = [R]₀ - 0.999[R]₀ = 0.001[R]₀ = 10⁻³[R]₀. Using first-order formula: t_99.9% = (2.303/k) log([R]₀ / 10⁻³[R]₀) = (2.303/k) log(10³) = 3 × 2.303/k = 6.909/k. Half life is t½ = 0.693/k. Dividing: t_99.9% / t½ = (6.909/k) / (0.693/k) ≈ 10. Therefore, t_99.9% = 10 × t½. (Hence Proved)'
      },
      {
        question: 'What is a Pseudo First Order reaction? Give an example.',
        answer: 'A reaction which is truly higher order but behaves kinetically as a first-order reaction under specific conditions (usually when one reactant is in huge excess). Example: Acid-catalyzed hydrolysis of ethyl acetate: CH₃COOC₂H₅ + H₂O --[H⁺]--> CH₃COOH + C₂H₅OH. Because water is present in enormous excess, its concentration remains essentially constant, so Rate = k’[Ester].'
      }
    ],
    relatedSlugs: [
      'class-12-chemistry-solutions-colligative-properties',
      'class-12-physics-current-electricity-kirchhoff-rules',
      'class-12-maths-calculus-derivatives-integrals-formula'
    ]
  },
  {
    slug: 'class-12-maths-matrices-determinants-formulas',
    title: 'Class 12 Maths Matrices and Determinants – Adjoint & Inverse Formulas',
    shortTitle: 'Class 12 Matrices & Determinants',
    description: 'Master CBSE Class 12 Maths Chapter 3 & 4 Matrices and Determinants. Properties of determinants, transpose, symmetric vs skew-symmetric matrices, adjoint of a matrix, and solving systems of linear equations using matrix inverse method.',
    keywords: 'matrices and determinants class 12 maths notes, adjoint of a matrix formula, inverse of 3x3 matrix a-1 = adj a / det a, cramers rule matrix method linear equations, cbse class 12 maths',
    badge: 'CBSE Class 12 Mathematics',
    h1: '🔢 Matrices & Determinants: Complete Notes, Adjoint & Inverse Guide',
    subtitle: 'From matrix multiplication rules and properties to solving 3-variable linear systems via matrix inversion.',
    updated: 'Academic Session 2025–2026 | CBSE Board Aligned',
    category: 'Class 12 Mathematics',
    highlight: '🎯 <strong>Guaranteed 5-Mark Question:</strong> Solving a system of three linear equations in three variables using the Matrix Inverse Method: X = A⁻¹ B.',
    sections: [
      {
        h2: '1. Types of Matrices & Multiplication Rules',
        contentHtml: `
          <p>A matrix is an ordered rectangular array of numbers or functions with <em>m</em> rows and <em>n</em> columns (order <code>m × n</code>):</p>
          <ul>
            <li><strong>Symmetric Matrix:</strong> A square matrix <code>A</code> is symmetric if <code>Aᵀ = A</code> (i.e., <code>a_ij = a_ji</code> for all i, j).</li>
            <li><strong>Skew-Symmetric Matrix:</strong> A square matrix <code>A</code> is skew-symmetric if <code>Aᵀ = -A</code> (i.e., <code>a_ij = -a_ji</code>). All principal diagonal elements of a skew-symmetric matrix are strictly <strong>zero</strong>.</li>
            <li><strong>Theorem:</strong> Any square matrix <code>A</code> can be uniquely expressed as the sum of a symmetric and a skew-symmetric matrix:
              <br/><code>A = ½ (A + Aᵀ) [Symmetric] + ½ (A - Aᵀ) [Skew-Symmetric]</code>.</li>
            <li><strong>Matrix Multiplication Condition:</strong> Product <code>AB</code> is defined if and only if the number of columns in <em>A</em> equals the number of rows in <em>B</em>. Matrix multiplication is generally <strong>non-commutative</strong> (<code>AB ≠ BA</code>).</li>
          </ul>
        `
      },
      {
        h2: '2. Determinants, Minors, Cofactors & Adjoint',
        contentHtml: `
          <p>A determinant is a scalar value associated with any square matrix. Determinant of transpose: <code>|Aᵀ| = |A|</code>.</p>
          <p><strong>Cofactor (A_ij):</strong> <code>A_ij = (-1)^(i + j) · M_ij</code> (where M_ij is the minor obtained by deleting row i and column j).</p>
          <p><strong>Adjoint of a Square Matrix (adj A):</strong> The transpose of the matrix of cofactors: <code>adj A = [A_ij]ᵀ</code>.</p>
          <p><strong>Fundamental Adjoint Theorems (High-Yield 1-Mark Formulae):</strong></p>
          <ul>
            <li><code>A · (adj A) = (adj A) · A = |A| · I</code></li>
            <li>For an n × n matrix: <code>|adj A| = |A|^(n - 1)</code></li>
            <li><code>|adj (adj A)| = |A|^((n - 1)²)</code></li>
            <li><code>adj (AB) = (adj B) · (adj A)</code></li>
          </ul>
        `
      },
      {
        h2: '3. Inverse of a Matrix & Matrix Method for Linear Systems',
        contentHtml: `
          <p>A square matrix <code>A</code> is invertible (non-singular) if and only if <code>|A| ≠ 0</code>. The inverse matrix is:</p>
          <div style="background:var(--p-light); padding:14px 18px; border-radius:12px; margin-bottom:12px; font-size:1.05rem;">
            <code>A⁻¹ = (1 / |A|) · adj(A)</code>
          </div>
          <p><strong>Solving System of Linear Equations (AX = B):</strong></p>
          <div style="background:var(--bg); padding:16px; border:1px solid var(--bdr); border-radius:12px; line-height:1.7;">
            <p>For system: <code>a₁x + b₁y + c₁z = d₁</code>, <code>a₂x + b₂y + c₂z = d₂</code>, <code>a₃x + b₃y + c₃z = d₃</code>:</p>
            <p>1. Form coefficient matrix <code>A = [[a₁, b₁, c₁], [a₂, b₂, c₂], [a₃, b₃, c₃]]</code>, variable vector <code>X = [[x], [y], [z]]</code>, and constant vector <code>B = [[d₁], [d₂], [d₃]]</code>.</p>
            <p>2. Calculate determinant <code>|A|</code>. If <code>|A| ≠ 0</code>, the system is <strong>consistent</strong> with a unique solution:</p>
            <p style="font-weight:700; color:var(--p); font-size:1.1rem;"><code>X = A⁻¹ · B</code></p>
          </div>
        `
      }
    ],
    faq: [
      {
        question: 'If A is a square matrix of order 3 and |A| = 5, find the value of |adj A|.',
        answer: 'Using the formula |adj A| = |A|^(n - 1): here n = 3 and |A| = 5. Therefore: |adj A| = 5^(3 - 1) = 5² = 25.'
      },
      {
        question: 'What is the condition for a system AX = B to have infinitely many solutions versus no solution when |A| = 0?',
        answer: 'When |A| = 0 (singular matrix): Calculate (adj A) · B. (1) If (adj A) · B ≠ O (zero matrix), the system is inconsistent and has NO SOLUTION; (2) If (adj A) · B = O, the system may be consistent with INFINITELY MANY SOLUTIONS or inconsistent.'
      }
    ],
    relatedSlugs: [
      'class-12-maths-calculus-derivatives-integrals-formula',
      'class-12-physics-electrostatics-formulas-derivations',
      'cbse-class-10-maths-formula-sheet'
    ]
  },
  {
    slug: 'class-12-maths-calculus-derivatives-integrals-formula',
    title: 'Class 12 Maths Calculus Master Sheet – Differentiation & Integration Formulas',
    shortTitle: 'Class 12 Calculus Formulas',
    description: 'Master CBSE Class 12 Maths Calculus. Complete master cheat sheet of differentiation formulas, integration standard forms, integration by parts (ILATE rule), definite integral properties, and differential equations.',
    keywords: 'class 12 maths calculus formulas pdf, differentiation integration formulas cheat sheet, integration by parts ilate rule, definite integrals properties class 12, cbse class 12 board maths',
    badge: 'CBSE Class 12 Mathematics',
    h1: '📐 Calculus Master Sheet: Differentiation & Integration Complete Formulas',
    subtitle: 'All derivatives, standard integrals, trigonometric substitutions, and definite integral properties in one reference.',
    updated: 'Academic Session 2025–2026 | CBSE Board Aligned',
    category: 'Class 12 Mathematics',
    highlight: '💡 <strong>High-Weightage Unit:</strong> Calculus (Continuity, Differentiation, Applications of Derivatives, Integrals, Applications of Integrals, Differential Equations) accounts for 35 out of 80 marks (~44%) in CBSE Class 12 Maths.',
    sections: [
      {
        h2: '1. Standard Differentiation Formulas & Rules',
        contentHtml: `
          <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem;">
            <thead>
              <tr style="background:var(--p-light); text-align:left;">
                <th style="padding:10px; border:1px solid var(--bdr);">Function f(x)</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Derivative d/dx [f(x)]</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Inverse Trig Functions</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Derivative</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>xⁿ</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>n · xⁿ⁻¹</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>sin⁻¹(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>1 / √(1 - x²)</code></td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>sin(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>cos(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>cos⁻¹(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>-1 / √(1 - x²)</code></td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>cos(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>-sin(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>tan⁻¹(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>1 / (1 + x²)</code></td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>tan(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>sec²(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>cot⁻¹(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>-1 / (1 + x²)</code></td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>eˣ</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>eˣ</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>sec⁻¹(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>1 / [ |x| · √(x² - 1) ]</code></td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>ln(x)</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>1 / x</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>aˣ</code></td>
                <td style="padding:8px; border:1px solid var(--bdr);"><code>aˣ · ln(a)</code></td>
              </tr>
            </tbody>
          </table>
          <p style="margin-top:14px;"><strong>Product Rule:</strong> <code>d/dx (u · v) = u · (dv/dx) + v · (du/dx)</code></p>
          <p><strong>Quotient Rule:</strong> <code>d/dx (u / v) = [ v · (du/dx) - u · (dv/dx) ] / v²</code></p>
        `
      },
      {
        h2: '2. Standard Indefinite Integrals & Special Integrals',
        contentHtml: `
          <ul>
            <li><code>∫ xⁿ dx = [ x^(n+1) / (n+1) ] + C</code> (n ≠ -1)</li>
            <li><code>∫ (1/x) dx = ln|x| + C</code>; <code>∫ eˣ dx = eˣ + C</code></li>
            <li><code>∫ sin(x) dx = -cos(x) + C</code>; <code>∫ cos(x) dx = sin(x) + C</code></li>
            <li><code>∫ sec²(x) dx = tan(x) + C</code>; <code>∫ cosec²(x) dx = -cot(x) + C</code></li>
            <li><code>∫ tan(x) dx = ln|sec x| + C = -ln|cos x| + C</code></li>
            <li><code>∫ cot(x) dx = ln|sin x| + C</code></li>
          </ul>
          <p><strong>Special Integrals (Crucial for 3-mark & 5-mark integrals):</strong></p>
          <ul>
            <li><code>∫ dx / (x² + a²) = (1/a) · tan⁻¹(x/a) + C</code></li>
            <li><code>∫ dx / (x² - a²) = [ 1 / (2a) ] · ln | (x - a) / (x + a) | + C</code></li>
            <li><code>∫ dx / (a² - x²) = [ 1 / (2a) ] · ln | (a + x) / (a - x) | + C</code></li>
            <li><code>∫ dx / √(a² - x²) = sin⁻¹(x/a) + C</code></li>
            <li><code>∫ dx / √(x² ± a²) = ln | x + √(x² ± a²) | + C</code></li>
          </ul>
        `
      },
      {
        h2: '3. Integration by Parts & Definite Integral Properties',
        contentHtml: `
          <p><strong>Integration by Parts (ILATE Priority Rule: Inverse, Logarithmic, Algebraic, Trigonometric, Exponential):</strong></p>
          <div style="background:var(--p-light); padding:14px 18px; border-radius:12px; margin-bottom:12px;">
            <code>∫ u · v dx = u · ∫ v dx - ∫ [ (du/dx) · ∫ v dx ] dx</code>
          </div>
          <p><strong>Classic eˣ Shortcut:</strong> <code>∫ eˣ [ f(x) + f'(x) ] dx = eˣ · f(x) + C</code></p>
          <p><strong>King’s Property of Definite Integrals (Used in 90% of exam proofs):</strong></p>
          <div style="background:var(--bg); padding:14px; border:1px solid var(--bdr); border-radius:12px;">
            <code>∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx</code>
            <br/>
            <code>∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b - x) dx</code>
          </div>
        `
      }
    ],
    faq: [
      {
        question: 'Evaluate ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx using King’s property.',
        answer: 'Let I = ∫₀^(π/2) [ √(sin x) / (√(sin x) + √(cos x)) ] dx ... (1). By King’s Property ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx, replace x by (π/2 - x): I = ∫₀^(π/2) [ √(cos x) / (√(cos x) + √(sin x)) ] dx ... (2). Adding (1) and (2): 2I = ∫₀^(π/2) 1 dx = [x]₀^(π/2) = π/2. Therefore: I = π/4.'
      },
      {
        question: 'What is the integrating factor (I.F.) of linear differential equation dy/dx + P(x)·y = Q(x)?',
        answer: 'The integrating factor is I.F. = e^(∫ P(x) dx). The general solution of the differential equation is then given by: y · (I.F.) = ∫ [ Q(x) · (I.F.) ] dx + C.'
      }
    ],
    relatedSlugs: [
      'class-12-maths-matrices-determinants-formulas',
      'class-12-physics-electrostatics-formulas-derivations',
      'cbse-class-10-maths-formula-sheet'
    ]
  }
];
