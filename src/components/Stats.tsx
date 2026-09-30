import { useEffect, useRef, useState } from 'react';
import { stats } from '../data/content';
import { animateCounter } from '../utils/animations';

const Counter = ({ value, suffix, start }: { value: number; suffix: string; start: boolean }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    return animateCounter(value, setCurrent);
  }, [start, value]);

  return (
    <>
      {current}
      <span className="text-brand-500">{suffix}</span>
    </>
  );
};

const Stats = () => {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} aria-label="Chiffres clés" className="bg-white pb-16 pt-16 lg:pt-36">
      <div className="container-x">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-slate-200">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col-reverse text-center lg:px-6">
              <dt className="mt-2 text-sm font-medium uppercase tracking-wider text-slate-500">{stat.label}</dt>
              <dd className="font-display text-4xl font-extrabold text-navy-800 sm:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} start={inView} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Stats;
