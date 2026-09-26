// generator/articles_maths.js

module.exports = [
  {
    slug: 'cbse-class-10-maths-real-numbers-guide',
    title: 'Real Numbers Class 10 Notes – Fundamental Theorem & Irrationality Proofs',
    shortTitle: 'Real Numbers (Maths)',
    description: 'Master CBSE Class 10 Maths Chapter 1 Real Numbers. Complete notes on Fundamental Theorem of Arithmetic, HCF & LCM relation, and step-by-step proofs of irrational numbers (√2, √3, √5).',
    keywords: 'real numbers class 10 notes, fundamental theorem of arithmetic, proof of root 2 is irrational, hcf and lcm relation, ncert class 10 maths chapter 1',
    badge: 'CBSE Class 10 Mathematics',
    h1: '🔢 Real Numbers: Complete NCERT Class 10 Maths Notes',
    subtitle: 'Step-by-step guide to prime factorization, HCF-LCM relationships, and proof of irrationality.',
    updated: 'Academic Session 2025–2026 | CBSE Aligned',
    category: 'Mathematics',
    highlight: '🎯 <strong>Guaranteed 3-Mark Question:</strong> A contradiction proof that √2, √3, √5, or (3 + 2√5) is irrational appears in virtually every CBSE Class 10 board examination paper.',
    sections: [
      {
        h2: '1. The Fundamental Theorem of Arithmetic',
        contentHtml: `
          <p>Every composite number can be expressed (factorized) as the product of powers of primes, and this prime factorization is <strong>unique</strong>, apart from the order in which the prime factors occur.</p>
          <div style="background:var(--bg); padding:14px; border:1px solid var(--bdr); border-radius:12px; margin-bottom:12px;">
            <code>Composite Number x = p₁ᵃ¹ · p₂ᵃ² · p₃ᵃ³ ... · pₙᵃⁿ</code>
          </div>
          <p><strong>Calculating HCF and LCM via Prime Factorization:</strong></p>
          <ul>
            <li><strong>HCF (Highest Common Factor):</strong> Product of the <em>smallest power</em> of each common prime factor involved in the numbers.</li>
            <li><strong>LCM (Lowest Common Multiple):</strong> Product of the <em>greatest power</em> of each prime factor involved in the numbers.</li>
            <li><strong>Crucial Formula (For any two positive integers a and b):</strong>
              <br/><code>HCF(a, b) × LCM(a, b) = a × b</code>
              <br/><span style="color:#ef4444; font-size:0.85rem;">⚠️ Note: This relationship holds ONLY for two numbers, not for three numbers!</span>
            </li>
          </ul>
        `
      },
      {
        h2: '2. Step-by-Step Proof: Proving √2 and √5 are Irrational',
        contentHtml: `
          <p>These proofs rely on the classical method of <strong>Contradiction</strong>, assuming the contrary and demonstrating an absurd logical impossibility.</p>
          <p><strong>Theorem: Prove that √5 is an irrational number.</strong></p>
          <div style="background:var(--bg); padding:18px; border:1px solid var(--bdr); border-radius:12px; line-height:1.7;">
            <p>1. Let us assume, on the contrary, that √5 is rational.</p>
            <p>2. Then there exist coprime integers <em>a</em> and <em>b</em> (where b ≠ 0 and HCF(a, b) = 1) such that:
               <br/><code>√5 = a / b  ⟹  a = b√5</code></p>
            <p>3. Squaring both sides: <code>a² = 5b²</code> ... (Equation 1)</p>
            <p>4. Since 5 divides <code>5b²</code>, it follows that <strong>5 divides a²</strong>. By fundamental arithmetic theorem, if a prime <em>p</em> divides <em>a²</em>, then <strong>5 divides a</strong>.</p>
            <p>5. Therefore, we can write <code>a = 5c</code> for some integer <em>c</em>.</p>
            <p>6. Substituting <code>a = 5c</code> into Equation 1:
               <br/><code>(5c)² = 5b²  ⟹  25c² = 5b²  ⟹  b² = 5c²</code></p>
            <p>7. This implies that <strong>5 divides b²</strong>, and consequently, <strong>5 divides b</strong>.</p>
            <p>8. From steps 4 and 7, both <em>a</em> and <em>b</em> share at least <strong>5 as a common factor</strong>.</p>
            <p>9. But this contradicts our foundational fact that <em>a</em> and <em>b</em> are coprime (HCF = 1).</p>
            <p>10. This contradiction arises because of our incorrect assumption that √5 is rational. Hence, <strong>√5 is irrational</strong>. (Hence Proved)</p>
          </div>
        `
      },
      {
        h2: '3. Decimal Expansions of Rational Numbers',
        contentHtml: `
          <p>Let <code>x = p / q</code> be a rational number in simplest form (where <em>p</em> and <em>q</em> are coprime):</p>
          <ul>
            <li><strong>Terminating Decimal:</strong> The prime factorization of denominator <em>q</em> is strictly of the form <code>2ⁿ · 5ᵐ</code>, where <em>n</em> and <em>m</em> are non-negative integers. E.g., <code>13 / 125 = 13 / 5³ = 13 × 2³ / (5³ × 2³) = 104 / 1000 = 0.104</code>.</li>
            <li><strong>Non-Terminating Repeating (Recurring) Decimal:</strong> The prime factorization of denominator <em>q</em> contains any prime factor other than 2 or 5 (such as 3, 7, 11). E.g., <code>1 / 7</code>, <code>5 / 6</code>.</li>
          </ul>
        `
      }
    ],
    faq: [
      {
        question: 'Can the number 6ⁿ end with the digit 0 for any natural number n?',
        answer: 'For a number to end with the digit 0, its prime factorization must contain both primes 2 and 5 (since 10 = 2 × 5). The prime factorization of 6ⁿ is (2 × 3)ⁿ = 2ⁿ × 3ⁿ. By the uniqueness of the Fundamental Theorem of Arithmetic, there are no prime factors of 5. Hence, 6ⁿ can never end with the digit zero for any natural number n.'
      },
      {
        question: 'If HCF(306, 657) = 9, find LCM(306, 657).',
        answer: 'Using the formula HCF(a, b) × LCM(a, b) = a × b: LCM(306, 657) = (306 × 657) / 9 = 34 × 657 = 22,338.'
      }
    ],
    relatedSlugs: [
      'cbse-class-10-maths-formula-sheet',
      'cbse-class-10-maths-polynomials-notes',
      'cbse-class-10-maths-quadratic-equations-solutions'
    ]
  },
  {
    slug: 'cbse-class-10-maths-polynomials-notes',
    title: 'Polynomials Class 10 Notes – Zeroes, Graph Shapes & Coefficients',
    shortTitle: 'Polynomials (Maths)',
    description: 'Complete CBSE Class 10 Maths Chapter 2 Polynomials revision notes. Geometrical meaning of zeroes, parabolic curves, and the relationship between zeroes and coefficients of quadratic polynomials.',
    keywords: 'polynomials class 10 notes, zeroes of quadratic polynomial, sum and product of zeroes, alpha beta maths formula, ncert class 10 maths chapter 2',
    badge: 'CBSE Class 10 Mathematics',
    h1: '📐 Polynomials: Notes, Zeroes & Coefficient Relationships',
    subtitle: 'Master quadratic and cubic polynomials, parabolic graph intersections, and alpha-beta algebraic identities.',
    updated: 'Academic Session 2025–2026 | CBSE Aligned',
    category: 'Mathematics',
    highlight: '💡 <strong>Formula Alert:</strong> For quadratic polynomial ax² + bx + c, always remember: Sum of zeroes (α + β) = -b/a, and Product of zeroes (α · β) = c/a.',
    sections: [
      {
        h2: '1. Degree & Geometrical Meaning of Zeroes of a Polynomial',
        contentHtml: `
          <p>The highest power of variable <em>x</em> in a polynomial <code>P(x)</code> is called its <strong>degree</strong>:</p>
          <ul>
            <li><strong>Linear Polynomial (Degree 1):</strong> <code>P(x) = ax + b</code> (a ≠ 0). Graph is a straight line; intersects X-axis at exactly 1 point (Zero: <code>x = -b/a</code>).</li>
            <li><strong>Quadratic Polynomial (Degree 2):</strong> <code>P(x) = ax² + bx + c</code> (a ≠ 0). Graph is a U-shaped curve called a <strong>Parabola</strong>. Opens upwards if <code>a > 0</code>, opens downwards if <code>a < 0</code>. Intersects X-axis at at most 2 points.</li>
            <li><strong>Cubic Polynomial (Degree 3):</strong> <code>P(x) = ax³ + bx² + cx + d</code> (a ≠ 0). Intersects X-axis at at most 3 points.</li>
          </ul>
          <p><strong>Geometrical Zero Rule:</strong> The total number of zeroes of <code>y = P(x)</code> is equal to the exact number of points where the curve intersects the <strong>X-axis</strong>.</p>
        `
      },
      {
        h2: '2. Relationship Between Zeroes and Coefficients',
        contentHtml: `
          <p>Let <strong>α (alpha)</strong> and <strong>β (beta)</strong> be the two zeroes of the quadratic polynomial <code>P(x) = ax² + bx + c</code>:</p>
          <div style="background:var(--bg); padding:16px; border:1px solid var(--bdr); border-radius:12px; margin-bottom:14px; line-height:1.8;">
            <p><strong>Sum of Zeroes:</strong> <code>α + β = - (Coefficient of x) / (Coefficient of x²) = -b / a</code></p>
            <p><strong>Product of Zeroes:</strong> <code>α · β = (Constant term) / (Coefficient of x²) = c / a</code></p>
          </div>
          <p><strong>Forming a Quadratic Polynomial when Zeroes are Given:</strong></p>
          <p>If sum <code>S = α + β</code> and product <code>P = α · β</code> are known, the polynomial is given by:</p>
          <div style="background:var(--p-light); padding:12px 18px; border-radius:10px;">
            <code>P(x) = k · [x² - (Sum of Zeroes)x + (Product of Zeroes)] = k · [x² - Sx + P]</code>
          </div>
        `
      },
      {
        h2: '3. High-Scoring Symmetric Expressions of α and β',
        contentHtml: `
          <p>Board exams frequently ask students to evaluate algebraic combinations without calculating α and β individually:</p>
          <ul>
            <li><code>α² + β² = (α + β)² - 2αβ = (-b/a)² - 2(c/a)</code></li>
            <li><code>(α - β)² = (α + β)² - 4αβ</code>  ⟹  <code>α - β = √[(α + β)² - 4αβ]</code></li>
            <li><code>1/α + 1/β = (α + β) / (αβ) = (-b/a) / (c/a) = -b/c</code></li>
            <li><code>α/β + β/α = (α² + β²) / (αβ) = [(α + β)² - 2αβ] / (αβ)</code></li>
            <li><code>α³ + β³ = (α + β)³ - 3αβ(α + β)</code></li>
          </ul>
        `
      }
    ],
    faq: [
      {
        question: 'Find a quadratic polynomial whose sum and product of zeroes are -3 and 2.',
        answer: 'Using the standard formula P(x) = x² - (Sum)x + Product: P(x) = x² - (-3)x + 2 = x² + 3x + 2. The zeroes are x = -1 and x = -2.'
      },
      {
        question: 'Can a quadratic polynomial have no real zeroes? What does its graph look like?',
        answer: 'Yes, if the discriminant D = b² - 4ac < 0, the polynomial has no real zeroes. Geometrically, its parabolic graph lies entirely above or entirely below the X-axis and never intersects the X-axis.'
      }
    ],
    relatedSlugs: [
      'cbse-class-10-maths-real-numbers-guide',
      'cbse-class-10-maths-quadratic-equations-solutions',
      'cbse-class-10-maths-formula-sheet'
    ]
  },
  {
    slug: 'cbse-class-10-maths-pair-of-linear-equations',
    title: 'Pair of Linear Equations in Two Variables Class 10 Notes & Methods',
    shortTitle: 'Linear Equations in 2 Variables',
    description: 'Master Class 10 Maths Chapter 3 Pair of Linear Equations in Two Variables. Consistency conditions, graphical method, substitution method, elimination method, and upstream-downstream problems.',
    keywords: 'pair of linear equations in two variables class 10, consistency conditions a1 a2 b1 b2 c1 c2, elimination method steps, substitution method maths, speed upstream downstream problem',
    badge: 'CBSE Class 10 Mathematics',
    h1: '📊 Linear Equations in Two Variables: Complete Solution Guide',
    subtitle: 'Detailed coverage of graphical consistency, algebraic methods, and word problem strategies.',
    updated: 'Academic Session 2025–2026 | NCERT Aligned',
    category: 'Mathematics',
    highlight: '💡 <strong>Board Blueprint:</strong> Word problems on upstream/downstream boat speeds, fraction problems, and age problems carry 4 to 5 marks in the long answer section.',
    sections: [
      {
        h2: '1. Standard Form & Consistency Conditions',
        contentHtml: `
          <p>A pair of linear equations in variables <em>x</em> and <em>y</em> is represented as:</p>
          <div style="background:var(--bg); padding:12px; border:1px solid var(--bdr); border-radius:10px; margin-bottom:12px;">
            <code>a₁x + b₁y + c₁ = 0</code> and <code>a₂x + b₂y + c₂ = 0</code>
          </div>
          <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem;">
            <thead>
              <tr style="background:var(--p-light); text-align:left;">
                <th style="padding:10px; border:1px solid var(--bdr);">Ratio Comparison</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Graphical Representation</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Algebraic Interpretation</th>
                <th style="padding:10px; border:1px solid var(--bdr);">System Consistency</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>a₁/a₂ ≠ b₁/b₂</code></td>
                <td style="padding:10px; border:1px solid var(--bdr);">Intersecting lines at 1 point</td>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>Exactly 1 Unique Solution</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>Consistent</strong></td>
              </tr>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>a₁/a₂ = b₁/b₂ = c₁/c₂</code></td>
                <td style="padding:10px; border:1px solid var(--bdr);">Coincident lines (overlapping)</td>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>Infinitely Many Solutions</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>Consistent (Dependent)</strong></td>
              </tr>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>a₁/a₂ = b₁/b₂ ≠ c₁/c₂</code></td>
                <td style="padding:10px; border:1px solid var(--bdr);">Parallel lines (never meet)</td>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>No Solution (Zero)</strong></td>
                <td style="padding:10px; border:1px solid var(--bdr);"><strong>Inconsistent</strong></td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        h2: '2. Algebraic Solution Methods: Substitution & Elimination',
        contentHtml: `
          <p><strong>Method 1: Elimination Method (Most Efficient for Board Exams):</strong></p>
          <ol style="padding-left:20px; line-height:1.7;">
            <li>Multiply one or both equations by suitable non-zero constants so coefficients of either <em>x</em> or <em>y</em> become equal.</li>
            <li>Add or subtract the two equations to eliminate that variable.</li>
            <li>Solve the resulting linear equation in one variable.</li>
            <li>Substitute this value back into either original equation to find the other variable.</li>
          </ol>
          <p><strong>Method 2: Substitution Method:</strong> Express one variable in terms of the other from one equation, and substitute it into the second equation.</p>
        `
      },
      {
        h2: '3. Master Formula for Upstream & Downstream Boat Word Problems',
        contentHtml: `
          <p>Let speed of boat in still water = <code>x km/h</code>, and speed of stream (current) = <code>y km/h</code>:</p>
          <ul>
            <li><strong>Speed Downstream (Moving with the stream):</strong> <code>Speed = (x + y) km/h</code></li>
            <li><strong>Speed Upstream (Moving against the stream):</strong> <code>Speed = (x - y) km/h</code> (Always x > y)</li>
            <li><strong>Time Equations:</strong> <code>Time = Distance / Speed</code>.
              <br/>Upstream Time: <code>t₁ = Distance / (x - y)</code>; Downstream Time: <code>t₂ = Distance / (x + y)</code>.</li>
          </ul>
        `
      }
    ],
    faq: [
      {
        question: 'For what value of k will the equations 2x + 3y = 7 and (k-1)x + (k+2)y = 3k have infinitely many solutions?',
        answer: 'For infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂. Thus: 2/(k-1) = 3/(k+2) = 7/(3k). Cross-multiplying the first two: 2(k+2) = 3(k-1) ⟹ 2k + 4 = 3k - 3 ⟹ k = 7. Checking with 7/(3k): 7/(21) = 1/3, which matches 2/(7-1) = 2/6 = 1/3. Hence, k = 7.'
      },
      {
        question: 'Solve for x and y: 2x + 3y = 11 and 2x - 4y = -24.',
        answer: 'Subtracting equation 2 from equation 1 eliminates x: (2x - 2x) + (3y - (-4y)) = 11 - (-24) ⟹ 7y = 35 ⟹ y = 5. Substituting y = 5 into 2x + 3(5) = 11 ⟹ 2x = -4 ⟹ x = -2. Solution: x = -2, y = 5.'
      }
    ],
    relatedSlugs: [
      'cbse-class-10-maths-quadratic-equations-solutions',
      'cbse-class-10-maths-polynomials-notes',
      'cbse-class-10-maths-formula-sheet'
    ]
  },
  {
    slug: 'cbse-class-10-maths-quadratic-equations-solutions',
    title: 'Quadratic Equations Class 10 Notes – Discriminant, Roots & Word Problems',
    shortTitle: 'Quadratic Equations (Maths)',
    description: 'Comprehensive CBSE Class 10 Maths Chapter 4 Quadratic Equations notes. Quadratic formula, nature of roots based on Discriminant D, factorization method, and train speed problems.',
    keywords: 'quadratic equations class 10 notes, quadratic formula shreedharacharya, discriminant b2 - 4ac nature of roots, train speed word problems, ncert class 10 maths chapter 4',
    badge: 'CBSE Class 10 Mathematics',
    h1: '📈 Quadratic Equations: Complete Formulas, Roots & Word Problems',
    subtitle: 'From the quadratic formula and nature of roots to standard age, area, and speed applications.',
    updated: 'Academic Session 2025–2026 | CBSE Aligned',
    category: 'Mathematics',
    highlight: '💡 <strong>Exam Formula:</strong> The Discriminant D = b² - 4ac determines everything about the roots. If D > 0 (two distinct real roots), D = 0 (two equal real roots), D < 0 (no real roots).',
    sections: [
      {
        h2: '1. Standard Form & Methods of Solving Quadratic Equations',
        contentHtml: `
          <p>A quadratic equation in variable <em>x</em> is an equation of the form:</p>
          <div style="background:var(--bg); padding:12px; border:1px solid var(--bdr); border-radius:10px; margin-bottom:12px;">
            <code>ax² + bx + c = 0</code> (where a, b, c are real numbers and <strong>a ≠ 0</strong>)
          </div>
          <p><strong>Method 1: Factorization by Splitting the Middle Term:</strong></p>
          <p>Find two numbers <em>p</em> and <em>q</em> such that their sum <code>p + q = b</code> and their product <code>p · q = a · c</code>. Express the middle term as <code>px + qx</code>, group the terms, and factor out binomial roots.</p>
          <p><strong>Method 2: Quadratic Formula (Shreedharacharya’s Rule):</strong></p>
          <div style="background:var(--p-light); padding:14px 18px; border-radius:10px; font-size:1.05rem;">
            <code>x = [ -b ± √(b² - 4ac) ] / (2a)</code>
          </div>
        `
      },
      {
        h2: '2. Nature of Roots & The Discriminant (D)',
        contentHtml: `
          <p>The expression <code>D = b² - 4ac</code> is called the <strong>Discriminant</strong> because it discriminates the character of the solutions:</p>
          <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem;">
            <thead>
              <tr style="background:var(--p-light); text-align:left;">
                <th style="padding:10px; border:1px solid var(--bdr);">Value of Discriminant D</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Nature of Roots</th>
                <th style="padding:10px; border:1px solid var(--bdr);">Roots Formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>D > 0</code> (Positive)</td>
                <td style="padding:10px; border:1px solid var(--bdr);">Two distinct real roots</td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>x = (-b + √D)/2a</code> and <code>x = (-b - √D)/2a</code></td>
              </tr>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>D = 0</code> (Zero)</td>
                <td style="padding:10px; border:1px solid var(--bdr);">Two equal real roots (coincident)</td>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>x = -b / (2a)</code> (repeated twice)</td>
              </tr>
              <tr>
                <td style="padding:10px; border:1px solid var(--bdr);"><code>D < 0</code> (Negative)</td>
                <td style="padding:10px; border:1px solid var(--bdr);">No real roots (Imaginary roots)</td>
                <td style="padding:10px; border:1px solid var(--bdr);">No real solutions exist in ℝ</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        h2: '3. Solving Classic Train Speed & Work-Time Word Problems',
        contentHtml: `
          <p><strong>Standard Train Speed Problem Template:</strong></p>
          <p><em>"A train travels 360 km at a uniform speed. If the speed had been 5 km/h more, it would have taken 1 hour less for the same journey. Find the original speed."</em></p>
          <div style="background:var(--bg); padding:16px; border:1px solid var(--bdr); border-radius:12px; line-height:1.7;">
            <p>1. Let original speed = <code>x km/h</code>. Increased speed = <code>(x + 5) km/h</code>.</p>
            <p>2. Time taken at original speed: <code>t₁ = 360 / x</code> hours.</p>
            <p>3. Time taken at increased speed: <code>t₂ = 360 / (x + 5)</code> hours.</p>
            <p>4. Equation: <code>t₁ - t₂ = 1  ⟹  360/x - 360/(x + 5) = 1</code></p>
            <p>5. Simplify: <code>360[(x + 5 - x) / (x(x + 5))] = 1  ⟹  1800 = x² + 5x</code></p>
            <p>6. <code>x² + 5x - 1800 = 0  ⟹  (x + 45)(x - 40) = 0</code></p>
            <p>7. Since speed cannot be negative, <code>x = 40 km/h</code>. The original speed is <strong>40 km/h</strong>.</p>
          </div>
        `
      }
    ],
    faq: [
      {
        question: 'Find the values of k for which 2x² + kx + 3 = 0 has two equal real roots.',
        answer: 'For equal real roots, the discriminant must be zero: D = b² - 4ac = 0. Here a = 2, b = k, c = 3. Thus: k² - 4(2)(3) = 0 ⟹ k² - 24 = 0 ⟹ k² = 24 ⟹ k = ±√24 = ±2√6.'
      },
      {
        question: 'Can the sum of ages of two friends be 20 years, with product of their ages 4 years ago being 48?',
        answer: 'Let friend A age = x. Friend B age = 20 - x. Four years ago: (x - 4)(16 - x) = 48 ⟹ 16x - x² - 64 + 4x = 48 ⟹ x² - 20x + 112 = 0. Discriminant D = (-20)² - 4(1)(112) = 400 - 448 = -48 < 0. Since D < 0, no real solution exists. This situation is mathematically impossible.'
      }
    ],
    relatedSlugs: [
      'cbse-class-10-maths-pair-of-linear-equations',
      'cbse-class-10-maths-arithmetic-progressions',
      'cbse-class-10-maths-formula-sheet'
    ]
  },
  {
    slug: 'cbse-class-10-maths-arithmetic-progressions',
    title: 'Arithmetic Progressions Class 10 Notes – nth Term & Sum Formulas',
    shortTitle: 'Arithmetic Progressions (AP)',
    description: 'Master CBSE Class 10 Maths Chapter 5 Arithmetic Progressions. Complete notes on common difference d, general nth term formula, sum of n terms Sn, and real-life finance/ladder word problems.',
    keywords: 'arithmetic progressions class 10 notes, ap formulas nth term, sum of n terms of ap sn formula, common difference d, word problems ap class 10',
    badge: 'CBSE Class 10 Mathematics',
    h1: '🔢 Arithmetic Progressions: Master Notes, Formulas & Applications',
    subtitle: 'Step-by-step derivations for an, Sn, arithmetic mean, and board exam word problem solutions.',
    updated: 'Academic Session 2025–2026 | CBSE Aligned',
    category: 'Mathematics',
    highlight: '🎯 <strong>Key Formulas to Memorize:</strong> nth term an = a + (n - 1)d, and Sum of n terms Sn = n/2 [2a + (n - 1)d] = n/2 [a + l].',
    sections: [
      {
        h2: '1. What is an Arithmetic Progression (AP)?',
        contentHtml: `
          <p>An <strong>Arithmetic Progression</strong> is a sequence of numbers in which each term is obtained by adding a fixed number <em>d</em> (called the <strong>Common Difference</strong>) to the preceding term, except the first term <em>a</em>.</p>
          <div style="background:var(--bg); padding:12px; border:1px solid var(--bdr); border-radius:10px; margin-bottom:12px;">
            Standard form: <code>a, a + d, a + 2d, a + 3d, ..., a + (n - 1)d</code>
          </div>
          <ul>
            <li>Common difference <code>d = aₙ - aₙ₋₁</code> can be <strong>positive</strong> (increasing AP), <strong>negative</strong> (decreasing AP), or <strong>zero</strong> (constant AP).</li>
            <li>Three consecutive terms in AP are conveniently assumed as: <code>(a - d), a, (a + d)</code>.</li>
            <li>Four consecutive terms in AP are assumed as: <code>(a - 3d), (a - d), (a + d), (a + 3d)</code> (with common difference 2d).</li>
          </ul>
        `
      },
      {
        h2: '2. General nth Term of an AP (aₙ)',
        contentHtml: `
          <p>The <em>n</em>th term of an AP with first term <em>a</em> and common difference <em>d</em> is given by:</p>
          <div style="background:var(--p-light); padding:14px 18px; border-radius:10px; font-size:1.05rem;">
            <code>aₙ = a + (n - 1) · d</code>
          </div>
          <p><strong>nth Term from the END of an AP:</strong></p>
          <p>If an AP has last term <em>l</em> and common difference <em>d</em>, the <em>n</em>th term from the end is:</p>
          <div style="background:var(--bg); padding:12px; border:1px solid var(--bdr); border-radius:10px;">
            <code>aₙ (from end) = l - (n - 1) · d</code>
          </div>
        `
      },
      {
        h2: '3. Sum of First n Terms of an AP (Sₙ)',
        contentHtml: `
          <p>The sum <code>Sₙ</code> of the first <em>n</em> terms of an AP is calculated using either of two formulas:</p>
          <div style="background:var(--bg); padding:16px; border:1px solid var(--bdr); border-radius:12px; margin-bottom:14px; line-height:1.8;">
            <p>1. When common difference <em>d</em> is known: <code>Sₙ = (n / 2) · [2a + (n - 1)d]</code></p>
            <p>2. When first term <em>a</em> and last term <em>l</em> are known: <code>Sₙ = (n / 2) · [a + l]</code></p>
          </div>
          <p><strong>Crucial Relation Between aₙ and Sₙ:</strong></p>
          <p>The <em>n</em>th term is the difference between sum of <em>n</em> terms and sum of <em>(n - 1)</em> terms:
            <br/><code>aₙ = Sₙ - Sₙ₋₁</code>
          </p>
          <p><strong>Sum of First n Natural Numbers:</strong> <code>Sₙ = 1 + 2 + 3 + ... + n = [n(n + 1)] / 2</code></p>
        `
      }
    ],
    faq: [
      {
        question: 'Which term of the AP 21, 18, 15, ... is -81?',
        answer: 'Here a = 21, d = 18 - 21 = -3. Let an = -81. Using an = a + (n - 1)d: -81 = 21 + (n - 1)(-3) ⟹ -102 = -3(n - 1) ⟹ n - 1 = 34 ⟹ n = 35. The 35th term is -81.'
      },
      {
        question: 'If the sum of first n terms of an AP is given by Sn = 3n² + 5n, find its 25th term.',
        answer: 'Using an = Sn - Sn-1: an = (3n² + 5n) - [3(n-1)² + 5(n-1)] = 6n + 2. Substituting n = 25: a25 = 6(25) + 2 = 150 + 2 = 152.'
      }
    ],
    relatedSlugs: [
      'cbse-class-10-maths-quadratic-equations-solutions',
      'cbse-class-10-maths-triangles-theorems-proofs',
      'cbse-class-10-maths-formula-sheet'
    ]
  },
  {
    slug: 'cbse-class-10-maths-triangles-theorems-proofs',
    title: 'Triangles Class 10 Notes – Basic Proportionality Theorem (BPT) & Proofs',
    shortTitle: 'Triangles & BPT Theorem',
    description: 'Master CBSE Class 10 Maths Chapter 6 Triangles. Complete proofs of Basic Proportionality Theorem (Thales Theorem), its converse, criteria for similarity (AAA, SSS, SAS), and solved numericals.',
    keywords: 'triangles class 10 notes, basic proportionality theorem bpt thales proof, converse of bpt theorem, similarity criteria aaa sss sas, ncert class 10 maths chapter 6',
    badge: 'CBSE Class 10 Mathematics',
    h1: '📐 Triangles: Complete Theorems, BPT Proof & Similarity Criteria',
    subtitle: 'Rigorous geometric proofs, Thales theorem applications, and similarity problem strategies.',
    updated: 'Academic Session 2025–2026 | Board Ready',
    category: 'Mathematics',
    highlight: '🎯 <strong>Guaranteed 5-Mark Theorem Proof:</strong> State and prove the Basic Proportionality Theorem (BPT) or its direct application is a staple in the long answer section of Class 10 board exams.',
    sections: [
      {
        h2: '1. Basic Proportionality Theorem (Thales Theorem) Full Proof',
        contentHtml: `
          <p><strong>Statement:</strong> If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.</p>
          <div style="background:var(--bg); padding:18px; border:1px solid var(--bdr); border-radius:12px; line-height:1.7;">
            <p><strong>Given:</strong> In ΔABC, a line DE is drawn parallel to BC, intersecting AB at D and AC at E (DE || BC).</p>
            <p><strong>To Prove:</strong> <code>AD / DB = AE / EC</code></p>
            <p><strong>Construction:</strong> Join BE and CD. Draw perpendiculars DM ⊥ AC and EN ⊥ AB.</p>
            <p><strong>Proof:</strong></p>
            <p>1. Area of ΔADE = <code>½ × Base × Height = ½ × AD × EN</code></p>
            <p>2. Area of ΔBDE = <code>½ × DB × EN</code> (EN is height for obtuse angle)</p>
            <p>3. Ratio: <code>ar(ΔADE) / ar(ΔBDE) = (½ × AD × EN) / (½ × DB × EN) = AD / DB</code> ... (Equation 1)</p>
            <p>4. Similarly, considering AC as base:
               <br/><code>ar(ΔADE) / ar(ΔCDE) = (½ × AE × DM) / (½ × EC × DM) = AE / EC</code> ... (Equation 2)</p>
            <p>5. Notice that ΔBDE and ΔCDE share the same base DE and lie between the same parallel lines DE and BC.
               <br/>Therefore: <code>ar(ΔBDE) = ar(ΔCDE)</code> ... (Equation 3)</p>
            <p>6. From Equations 1, 2, and 3, the left-hand ratios are identical. Hence:
               <br/><code>AD / DB = AE / EC</code> (Hence Proved)</p>
          </div>
        `
      },
      {
        h2: '2. Criteria for Similarity of Triangles (AAA, SSS, SAS)',
        contentHtml: `
          <p>Two triangles ΔABC and ΔDEF are similar (written as <code>ΔABC ~ ΔDEF</code>) if: (1) Corresponding angles are equal, and (2) Corresponding sides are in the same ratio.</p>
          <ul>
            <li><strong>AAA Similarity (or AA Similarity):</strong> If two angles of one triangle are respectively equal to two angles of another triangle, the triangles are similar (third angle is automatically equal by angle-sum property).</li>
            <li><strong>SSS Similarity:</strong> If the three sides of one triangle are proportional to the three sides of another triangle: <code>AB/DE = BC/EF = AC/DF</code>, the triangles are similar.</li>
            <li><strong>SAS Similarity:</strong> If one angle of a triangle is equal to one angle of another triangle, and the sides including these angles are proportional: <code>AB/DE = AC/DF</code> and <code>∠A = ∠D</code>, then <code>ΔABC ~ ΔDEF</code>.</li>
          </ul>
        `
      }
    ],
    faq: [
      {
        question: 'State the Converse of Basic Proportionality Theorem.',
        answer: 'If a line divides any two sides of a triangle in the same ratio (AD/DB = AE/EC), then the line must be parallel to the third side (DE || BC).'
      },
      {
        question: 'A vertical pole of length 6 m casts a shadow 4 m long on the ground, and at the same time a tower casts a shadow 28 m long. Find the height of the tower.',
        answer: 'Since the sun angle of elevation is identical for both objects simultaneously: ΔPole ~ ΔTower (by AA similarity). Therefore: (Height of Pole) / (Height of Tower) = (Pole Shadow) / (Tower Shadow) ⟹ 6 / H = 4 / 28 ⟹ 6 / H = 1 / 7 ⟹ H = 42 meters. The height of the tower is 42 m.'
      }
    ],
    relatedSlugs: [
      'cbse-class-10-maths-coordinate-geometry-formulas',
      'cbse-class-10-maths-trigonometry-identities-proofs',
      'cbse-class-10-maths-formula-sheet'
    ]
  },
  {
    slug: 'cbse-class-10-maths-coordinate-geometry-formulas',
    title: 'Coordinate Geometry Class 10 Notes – Distance & Section Formulas',
    shortTitle: 'Coordinate Geometry (Maths)',
    description: 'Master CBSE Class 10 Maths Chapter 7 Coordinate Geometry. Complete formulas for Distance Formula, Section Formula (internal division), Midpoint formula, and collinearity tests.',
    keywords: 'coordinate geometry class 10 notes, distance formula proof, section formula internal division, midpoint coordinates formula, collinear points condition',
    badge: 'CBSE Class 10 Mathematics',
    h1: '📍 Coordinate Geometry: Complete Formulas, Proofs & Coordinate Geometry',
    subtitle: 'Distance between points, section ratio division, and proofs of geometric shapes on the Cartesian plane.',
    updated: 'Academic Session 2025–2026 | CBSE Aligned',
    category: 'Mathematics',
    highlight: '💡 <strong>Section Ratio Tip:</strong> Whenever finding the ratio in which a point divides a line segment, always assume the ratio as k : 1 instead of m₁ : m₂ to reduce variables.',
    sections: [
      {
        h2: '1. The Distance Formula & Applications',
        contentHtml: `
          <p>The straight-line distance between two coordinates <code>A(x₁, y₁)</code> and <code>B(x₂, y₂)</code> in the Cartesian plane is derived from Pythagoras Theorem:</p>
          <div style="background:var(--p-light); padding:14px 18px; border-radius:10px; font-size:1.05rem;">
            <code>AB = √[ (x₂ - x₁)² + (y₂ - y₁)² ]</code>
          </div>
          <p><strong>Distance from Origin (0,0):</strong> Distance of point <code>P(x, y)</code> from origin is simply <code>OP = √(x² + y²)</code>.</p>
          <p><strong>Proving Geometric Figures on Cartesian Plane:</strong></p>
          <ul>
            <li><strong>Equilateral Triangle:</strong> Show all three side lengths are equal: <code>AB = BC = CA</code>.</li>
            <li><strong>Right-Angled Triangle:</strong> Show sum of squares of two sides equals square of the third side: <code>AB² + BC² = AC²</code>.</li>
            <li><strong>Square vs. Rhombus:</strong> All 4 sides equal (<code>AB = BC = CD = DA</code>). For a Square, diagonals are equal (<code>AC = BD</code>); for a Rhombus, diagonals are NOT equal.</li>
            <li><strong>Rectangle vs. Parallelogram:</strong> Opposite sides equal. For a Rectangle, diagonals are equal; for a Parallelogram, diagonals are unequal.</li>
          </ul>
        `
      },
      {
        h2: '2. Section Formula & Midpoint Coordinates',
        contentHtml: `
          <p>The coordinates of point <code>P(x, y)</code> that divides the line segment joining <code>A(x₁, y₁)</code> and <code>B(x₂, y₂)</code> internally in the ratio <code>m₁ : m₂</code> are given by:</p>
          <div style="background:var(--bg); padding:16px; border:1px solid var(--bdr); border-radius:12px; margin-bottom:14px; line-height:1.8;">
            <code>x = (m₁x₂ + m₂x₁) / (m₁ + m₂)</code>
            <br/>
            <code>y = (m₁y₂ + m₂y₁) / (m₁ + m₂)</code>
          </div>
          <p><strong>Special Case 1: Midpoint Formula (Ratio 1 : 1):</strong></p>
          <div style="background:var(--p-light); padding:12px 18px; border-radius:10px;">
            <code>Midpoint M = [ (x₁ + x₂) / 2, (y₁ + y₂) / 2 ]</code>
          </div>
          <p><strong>Special Case 2: Centroid of a Triangle:</strong></p>
          <p>The centroid <em>G</em> of ΔABC with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃) is:
            <br/><code>G = [ (x₁ + x₂ + x₃) / 3, (y₁ + y₂ + y₃) / 3 ]</code>
          </p>
        `
      }
    ],
    faq: [
      {
        question: 'Find the ratio in which the Y-axis divides the line segment joining A(5, -6) and B(-1, -4).',
        answer: 'Any point on the Y-axis has x-coordinate equal to 0, i.e., P(0, y). Let the ratio be k : 1. Using section formula for x: 0 = [k(-1) + 1(5)] / (k + 1) ⟹ -k + 5 = 0 ⟹ k = 5. Therefore, the Y-axis divides the segment in the ratio 5 : 1.'
      },
      {
        question: 'Show that points A(1, 5), B(2, 3), and C(-2, -11) are collinear.',
        answer: 'Calculate distances: AB = √[(2-1)² + (3-5)²] = √[1 + 4] = √5. BC = √[(-2-2)² + (-11-3)²] = √[16 + 196] = √212 = 2√53. AC = √[(-2-1)² + (-11-5)²] = √[9 + 256] = √265. Since AB + BC ≠ AC, the points are NOT collinear.'
      }
    ],
    relatedSlugs: [
      'cbse-class-10-maths-triangles-theorems-proofs',
      'cbse-class-10-maths-trigonometry-identities-proofs',
      'cbse-class-10-maths-formula-sheet'
    ]
  },
  {
    slug: 'cbse-class-10-maths-trigonometry-identities-proofs',
    title: 'Introduction to Trigonometry Class 10 Notes – Formulas & Proofs',
    shortTitle: 'Trigonometry & Identities',
    description: 'Master CBSE Class 10 Maths Chapter 8 Introduction to Trigonometry. Trigonometric ratios table (0°, 30°, 45°, 60°, 90°), fundamental identities proofs, and heights & distances tricks.',
    keywords: 'trigonometry class 10 notes, trigonometric ratios table sin cos tan, trigonometric identities proofs, sin2 + cos2 = 1, heights and distances class 10',
    badge: 'CBSE Class 10 Mathematics',
    h1: '📐 Trigonometry & Identities: Formulas, Values & Proof Strategies',
    subtitle: 'Comprehensive guide to right-triangle trigonometry ratios, angle values table, and algebraic identity proofs.',
    updated: 'Academic Session 2025–2026 | Board Ready',
    category: 'Mathematics',
    highlight: '🎯 <strong>Three Golden Identities:</strong> (1) sin²θ + cos²θ = 1; (2) 1 + tan²θ = sec²θ; (3) 1 + cot²θ = cosec²θ. Memorize all rearranged forms for identity proofs.',
    sections: [
      {
        h2: '1. Trigonometric Ratios (T-Ratios) in a Right Triangle',
        contentHtml: `
          <p>For a right-angled triangle ΔABC with right angle at B and acute angle <code>θ = ∠A</code>:</p>
          <ul>
            <li><code>sin θ = Opposite Side (Perpendicular) / Hypotenuse = P / H</code></li>
            <li><code>cos θ = Adjacent Side (Base) / Hypotenuse = B / H</code></li>
            <li><code>tan θ = Opposite / Adjacent = P / B = sin θ / cos θ</code></li>
            <li><code>cosec θ = 1 / sin θ = H / P</code></li>
            <li><code>sec θ = 1 / cos θ = H / B</code></li>
            <li><code>cot θ = 1 / tan θ = B / P = cos θ / sin θ</code></li>
          </ul>
        `
      },
      {
        h2: '2. Standard Trigonometric Values Table (0° to 90°)',
        contentHtml: `
          <table style="width:100%; border-collapse:collapse; margin-top:12px; font-size:0.9rem;">
            <thead>
              <tr style="background:var(--p-light); text-align:center;">
                <th style="padding:10px; border:1px solid var(--bdr);">Ratio</th>
                <th style="padding:10px; border:1px solid var(--bdr);">0°</th>
                <th style="padding:10px; border:1px solid var(--bdr);">30°</th>
                <th style="padding:10px; border:1px solid var(--bdr);">45°</th>
                <th style="padding:10px; border:1px solid var(--bdr);">60°</th>
                <th style="padding:10px; border:1px solid var(--bdr);">90°</th>
              </tr>
            </thead>
            <tbody style="text-align:center;">
              <tr>
                <td style="padding:8px; border:1px solid var(--bdr); font-weight:700;">sin θ</td>
                <td style="padding:8px; border:1px solid var(--bdr);">0</td>
                <td style="padding:8px; border:1px solid var(--bdr);">1/2</td>
                <td style="padding:8px; border:1px solid var(--bdr);">1/√2</td>
                <td style="padding:8px; border:1px solid var(--bdr);">√3/2</td>
                <td style="padding:8px; border:1px solid var(--bdr);">1</td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid var(--bdr); font-weight:700;">cos θ</td>
                <td style="padding:8px; border:1px solid var(--bdr);">1</td>
                <td style="padding:8px; border:1px solid var(--bdr);">√3/2</td>
                <td style="padding:8px; border:1px solid var(--bdr);">1/√2</td>
                <td style="padding:8px; border:1px solid var(--bdr);">1/2</td>
                <td style="padding:8px; border:1px solid var(--bdr);">0</td>
              </tr>
              <tr>
                <td style="padding:8px; border:1px solid var(--bdr); font-weight:700;">tan θ</td>
                <td style="padding:8px; border:1px solid var(--bdr);">0</td>
                <td style="padding:8px; border:1px solid var(--bdr);">1/√3</td>
                <td style="padding:8px; border:1px solid var(--bdr);">1</td>
                <td style="padding:8px; border:1px solid var(--bdr);">√3</td>
                <td style="padding:8px; border:1px solid var(--bdr);">Not Defined</td>
              </tr>
            </tbody>
          </table>
        `
      },
      {
        h2: '3. Fundamental Identities & Top Proving Strategies',
        contentHtml: `
          <p><strong>The 3 Fundamental Identities:</strong></p>
          <ol style="padding-left:20px; line-height:1.7;">
            <li><code>sin²θ + cos²θ = 1  ⟹  sin²θ = 1 - cos²θ  ⟹  cos²θ = 1 - sin²θ</code></li>
            <li><code>1 + tan²θ = sec²θ  ⟹  sec²θ - tan²θ = 1  ⟹  (sec θ - tan θ)(sec θ + tan θ) = 1</code></li>
            <li><code>1 + cot²θ = cosec²θ  ⟹  cosec²θ - cot²θ = 1  ⟹  (cosec θ - cot θ)(cosec θ + cot θ) = 1</code></li>
          </ol>
          <p><strong>4 Rules of Thumb for Identity Proof Questions:</strong></p>
          <ul>
            <li>Convert everything into terms of <strong>sin θ</strong> and <strong>cos θ</strong> when you are stuck.</li>
            <li>Take the Lowest Common Denominator (LCM) of fractional terms.</li>
            <li>Rationalize the numerator or denominator when terms like <code>(1 ± sin θ)</code> or <code>(1 ± cos θ)</code> appear inside square roots.</li>
            <li>Apply algebraic identities: <code>a² - b² = (a - b)(a + b)</code>, <code>a³ + b³ = (a + b)(a² - ab + b²)</code>.</li>
          </ul>
        `
      }
    ],
    faq: [
      {
        question: 'Prove that (sin θ - 2sin³θ) / (2cos³θ - cos θ) = tan θ.',
        answer: 'LHS = [sin θ(1 - 2sin²θ)] / [cos θ(2cos²θ - 1)]. Since 1 - 2sin²θ = (cos²θ + sin²θ) - 2sin²θ = cos²θ - sin²θ, and 2cos²θ - 1 = 2cos²θ - (cos²θ + sin²θ) = cos²θ - sin²θ. Both bracket terms cancel out completely! LHS = sin θ / cos θ = tan θ = RHS. (Hence Proved)'
      },
      {
        question: 'If tan A = 4/3, find all other trigonometric ratios of angle A.',
        answer: 'Given tan A = P/B = 4/3. Let P = 4k, B = 3k. Hypotenuse H = √(P² + B²) = √(16k² + 9k²) = 5k. Therefore: sin A = 4/5, cos A = 3/5, cosec A = 5/4, sec A = 5/3, cot A = 3/4.'
      }
    ],
    relatedSlugs: [
      'cbse-class-10-maths-coordinate-geometry-formulas',
      'cbse-class-10-maths-triangles-theorems-proofs',
      'cbse-class-10-maths-formula-sheet'
    ]
  }
];
