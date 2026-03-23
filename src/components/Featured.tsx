export default function Featured() {
  const facts = [
    {
      icon: "🦎",
      title: "Чешуйчатые",
      desc: "Самый многочисленный отряд — более 10 000 видов. Ящерицы, змеи и хамелеоны населяют все континенты кроме Антарктиды.",
    },
    {
      icon: "🐊",
      title: "Крокодилы",
      desc: "Живые реликты эпохи динозавров. Существуют более 200 миллионов лет практически без изменений.",
    },
    {
      icon: "🐢",
      title: "Черепахи",
      desc: "Чемпионы по долголетию среди рептилий — некоторые особи доживают до 200 лет. Панцирь — часть скелета.",
    },
    {
      icon: "🌡️",
      title: "Хладнокровные",
      desc: "Температура тела зависит от окружающей среды. Это позволяет выживать без пищи неделями и месяцами.",
    },
  ];

  return (
    <div id="classes" className="min-h-screen px-6 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-20 mb-20">
          <div className="flex-1 lg:h-[600px] mb-8 lg:mb-0">
            <img
              src="https://cdn.poehali.dev/projects/f6896d48-e205-49df-af17-035c1f19647f/files/03179072-c006-46fa-8ecc-215c79de4b5e.jpg"
              alt="Хамелеон на листе"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Класс Reptilia</h3>
            <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
              Пресмыкающиеся появились около 320 миллионов лет назад и покорили сушу, воду и воздух задолго до появления человека.
            </p>
            <p className="text-neutral-600 text-lg leading-relaxed">
              Сегодня на Земле живёт более <strong>10 000 видов</strong> рептилий. Они освоили пустыни, тропические леса, океаны и горы — настоящие мастера выживания.
            </p>
          </div>
        </div>

        <div id="facts" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {facts.map((f) => (
            <div key={f.title} className="border-t-2 border-neutral-200 pt-6">
              <div className="text-4xl mb-4">{f.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-neutral-900">{f.title}</h4>
              <p className="text-neutral-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
