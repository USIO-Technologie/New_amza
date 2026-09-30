import { company } from '../../data/content';

const Logo = ({ light = false }: { light?: boolean }) => (
  <div className="flex items-center gap-3">
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md bg-navy-800 ring-1 ring-white/10">
      <span className="font-display text-lg font-extrabold tracking-tight text-white">NA</span>
      <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-sm bg-brand-500" />
    </div>
    <div className="leading-tight">
      <div className={`font-display text-xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-navy-900'}`}>
        {company.name}
      </div>
      <div className={`hidden whitespace-nowrap text-[10px] sm:block font-medium uppercase tracking-[0.12em] ${light ? 'text-white/70' : 'text-slate-500'}`}>
        {company.tagline}
      </div>
    </div>
  </div>
);

export default Logo;
