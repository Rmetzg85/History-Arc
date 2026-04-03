import ChartWrapper from './components/ChartWrapper';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="px-6 py-10 text-center border-b border-slate-800">
        <h1 className="text-4xl font-bold tracking-tight text-white mb-2">
          The Human Record
        </h1>
        <p className="text-lg text-slate-400 mb-6">
          2,500 Years of War, Conquest, Slavery &amp; Atrocity &mdash; Worldwide
        </p>
        <div className="max-w-3xl mx-auto text-sm text-slate-400 space-y-3 text-left">
          <p>
            This visualization maps over 60 of history most devastating events across 2,500 years
            and every inhabited continent. Each arc spans the duration of a conflict, conquest,
            system of slavery, or genocide, scaled by its length and overlaid to reveal patterns
            of human suffering that no single era or civilization can claim to have avoided.
          </p>
          <p>
            The goal is context, not excuse. Understanding the universality of historical atrocity
            does not diminish any individual tragedy, but it resists the temptation to treat
            violence as exceptional when it has, in fact, been the common condition. Hover any arc
            to learn more. Use the filters to explore by type or region.
          </p>
        </div>
      </header>

      {/* Chart */}
      <section className="px-4 py-8">
        <ChartWrapper />
      </section>

      {/* Context Cards */}
      <section className="px-6 py-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-amber-400 mb-3">Before America</h2>
          <p className="text-sm text-slate-400">
            Centuries before European colonizers arrived in the Americas, empires rose and fell
            through conquest, enslavement, and genocide across Asia, Africa, and Europe. The
            Mongols killed tens of millions. The Abbasid Caliphate was destroyed. The Crusades
            reshaped the Middle East. Violence was not invented in 1492 &mdash; it was exported.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-purple-400 mb-3">Slavery Was Universal</h2>
          <p className="text-sm text-slate-400">
            Every major civilization practiced some form of slavery. The Roman slave system,
            the Arab Trans-Saharan trade, the Ottoman devshirme, the Mughal empire, and the
            Transatlantic trade all institutionalized human bondage. The Transatlantic trade
            was uniquely brutal in scale and racial codification, but slavery as an institution
            crossed every culture and continent.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-700 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-blue-400 mb-3">The Shift</h2>
          <p className="text-sm text-slate-400">
            The 20th century produced both the most destructive wars in human history and
            the first serious international frameworks to prevent them. The Holocaust, the
            Gulag, the Holodomor, and two World Wars all occurred within living memory of
            the Universal Declaration of Human Rights. The arc of history bends toward
            accountability &mdash; slowly, imperfectly, but measurably.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 px-6 py-8 text-center text-xs text-slate-600">
        <p>
          This site is an educational resource. Casualty estimates are approximate and drawn
          from historical scholarship. Events are simplified for visualization purposes.
          This project does not endorse, minimize, or relativize any historical atrocity.
        </p>
      </footer>
    </main>
  );
  }
