import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Info, 
  Sparkles, 
  Calendar, 
  MapPin, 
  User, 
  Briefcase, 
  Clock,
  Heart,
  Activity,
  AlertCircle
} from 'lucide-react';

export default function SerEstarTheory() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 font-serif selection:bg-indigo-100 p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Header Section */}
        <header className="text-center space-y-4 border-b border-stone-200 pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} /> Իսպաներենի Քերականություն
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-stone-950 italic">Ser vs Estar</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Իսպաներենում կա «լինել» բայի երկու հիմնական տարբերակ։ Այս ուղեցույցը կօգնի ձեզ հասկանալ դրանց օգտագործման բոլոր նրբությունները։
          </p>
        </header>

        {/* 1. Conjugation Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3 text-stone-900 border-l-4 border-indigo-500 pl-4">
            <Info className="text-indigo-500" /> Խոնարհում (Conjugación)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* SER */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-stone-100">
              <h3 className="text-2xl font-black text-indigo-600 mb-6 italic">SER</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Yo</span> <span className="font-bold">soy</span></div>
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Tú</span> <span className="font-bold">eres</span></div>
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Él / Ella / Usted</span> <span className="font-bold">es</span></div>
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Nosotros</span> <span className="font-bold">somos</span></div>
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Vosotros</span> <span className="font-bold">sois</span></div>
                <div className="flex justify-between"><span>Ellos / Ellas / Ustedes</span> <span className="font-bold">son</span></div>
              </div>
            </div>
            {/* ESTAR */}
            <div className="bg-white p-8 rounded-[32px] shadow-sm border border-stone-100">
              <h3 className="text-2xl font-black text-emerald-600 mb-6 italic">ESTAR</h3>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Yo</span> <span className="font-bold">estoy</span></div>
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Tú</span> <span className="font-bold">estás</span></div>
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Él / Ella / Usted</span> <span className="font-bold">está</span></div>
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Nosotros</span> <span className="font-bold">estamos</span></div>
                <div className="flex justify-between border-b border-stone-50 pb-2"><span>Vosotros</span> <span className="font-bold">estáis</span></div>
                <div className="flex justify-between"><span>Ellos / Ellas / Ustedes</span> <span className="font-bold">están</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Detailed Rules Section */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold border-l-4 border-indigo-500 pl-4">Ե՞րբ օգտագործել</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* SER Details */}
            <div className="space-y-8">
              <div className="bg-indigo-600 text-white p-8 rounded-[40px] shadow-xl space-y-4">
                <h3 className="text-3xl font-black italic">SER (Մշտական)</h3>
                <p className="opacity-90 leading-relaxed font-medium">Օգտագործվում է մշտական հատկանիշների, ինքնության և էության համար։</p>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><User size={20} className="text-indigo-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Նկարագրություն և ինքնություն</h4>
                    <p className="text-stone-500 text-sm italic">Soy Juan. (Ես Խուանն եմ:) / Mi coche es azul. (Իմ մեքենան կապույտ է:)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><Briefcase size={20} className="text-indigo-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Մասնագիտություն</h4>
                    <p className="text-stone-500 text-sm italic">Él es médico. (Նա բժիշկ է:)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><Heart size={20} className="text-indigo-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Ծագում և ազգություն</h4>
                    <p className="text-stone-500 text-sm italic">Somos de Armenia. (Մենք Հայաստանից ենք:)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><Clock size={14} className="text-indigo-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Ժամանակ և ամսաթիվ</h4>
                    <p className="text-stone-500 text-sm italic">Hoy es lunes. (Այսօր երկուշաբթի է:) / Son las tres. (Ժամը երեքն է:)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><CheckCircle2 size={20} className="text-indigo-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Նյութ և պատկանելիություն</h4>
                    <p className="text-stone-500 text-sm italic">La mesa es de madera. (Սեղանը փայտից է:) / El libro es mío. (Գիրքը իմն է:)</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* ESTAR Details */}
            <div className="space-y-8">
              <div className="bg-emerald-600 text-white p-8 rounded-[40px] shadow-xl space-y-4">
                <h3 className="text-3xl font-black italic">ESTAR (Ժամանակավոր)</h3>
                <p className="opacity-90 leading-relaxed font-medium">Օգտագործվում է ժամանակավոր վիճակների և գտնվելու վայրի համար։</p>
              </div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><MapPin size={20} className="text-emerald-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Գտնվելու վայր</h4>
                    <p className="text-stone-500 text-sm italic">Estoy en casa. (Ես տանն եմ:) / Madrid está en España. (Մադրիդը Իսպանիայում է:)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><Activity size={20} className="text-emerald-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Ֆիզիկական և հոգեկան վիճակ</h4>
                    <p className="text-stone-500 text-sm italic">Él está cansado. (Նա հոգնած է:) / Estoy feliz. (Ես երջանիկ եմ:)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><Sparkles size={20} className="text-emerald-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Գործողություն (Ներկա շարունակական)</h4>
                    <p className="text-stone-500 text-sm italic">Estamos comiendo. (Մենք ուտում ենք:)</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-2xl shadow-sm"><AlertCircle size={20} className="text-emerald-600" /></div>
                  <div>
                    <h4 className="font-bold text-lg">Ժամանակավոր որակ</h4>
                    <p className="text-stone-500 text-sm italic">La sopa está rica. (Ապուրը համեղ է - հենց հիմա:)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Special Cases: Semantic Changes */}
        <section className="bg-stone-950 text-white p-10 md:p-16 rounded-[60px] shadow-2xl space-y-12 overflow-hidden relative">
          <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
          
          <h2 className="text-4xl font-black italic tracking-tighter text-center">Ինչպես է փոխվում իմաստը</h2>
          <p className="text-stone-400 text-center max-w-xl mx-auto italic">Որոշ ածականներ փոխում են իրենց իմաստը՝ կախված նրանից, թե որ բայն եք օգտագործում:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {/* Pair 1 */}
            <div className="bg-stone-900 p-6 rounded-3xl border border-stone-800 space-y-3">
              <h4 className="text-indigo-400 font-black text-xl">LISTO</h4>
              <p className="text-sm">**Ser listo:** Խելացի լինել</p>
              <p className="text-sm">**Estar listo:** Պատրաստ լինել</p>
            </div>
            {/* Pair 2 */}
            <div className="bg-stone-900 p-6 rounded-3xl border border-stone-800 space-y-3">
              <h4 className="text-emerald-400 font-black text-xl">MALO</h4>
              <p className="text-sm">**Ser malo:** Վատ մարդ լինել</p>
              <p className="text-sm">**Estar malo:** Հիվանդ լինել</p>
            </div>
            {/* Pair 3 */}
            <div className="bg-stone-900 p-6 rounded-3xl border border-stone-800 space-y-3">
              <h4 className="text-amber-400 font-black text-xl">ABURRIDO</h4>
              <p className="text-sm">**Ser aburrido:** Ձանձրալի մարդ</p>
              <p className="text-sm">**Estar aburrido:** Ձանձրանալ</p>
            </div>
            {/* Pair 4 */}
            <div className="bg-stone-900 p-6 rounded-3xl border border-stone-800 space-y-3">
              <h4 className="text-rose-400 font-black text-xl">RICO</h4>
              <p className="text-sm">**Ser rico:** Հարուստ լինել</p>
              <p className="text-sm">**Estar rico:** Համեղ լինել</p>
            </div>
            {/* Pair 5 */}
            <div className="bg-stone-900 p-6 rounded-3xl border border-stone-800 space-y-3">
              <h4 className="text-sky-400 font-black text-xl">VERDE</h4>
              <p className="text-sm">**Ser verde:** Կանաչ գույն</p>
              <p className="text-sm">**Estar verde:** Չհասունացած</p>
            </div>
            {/* Pair 6 */}
            <div className="bg-stone-900 p-6 rounded-3xl border border-stone-800 space-y-3 flex items-center justify-center italic text-stone-500 text-xs text-center">
              Սրանք կարևոր նրբություններ են, որոնք զգալի փոխում են խոսքի իմաստը։
            </div>
          </div>
        </section>

        {/* Closing Tip */}
        <footer className="text-center py-12 space-y-4">
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => <div key={i} className="w-2 h-2 rounded-full bg-indigo-200" />)}
          </div>
          <p className="text-stone-400 italic text-sm">
            Հիշե՛ք. "Ser" - Էություն, "Estar" - Վիճակ:
          </p>
        </footer>

      </div>
    </div>
  );
}
