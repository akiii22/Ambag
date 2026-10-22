type OverviewCardProps = {
    title: string;
    value: number;
    description: string;
}

const OverviewCard = ({title, value, description}: OverviewCardProps) => {
  return (
     <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">
              {title}
            </p>
            <p className="mt-3 text-4xl font-bold">{value}</p>
            <p className="mt-2 text-sm text-slate-400">
              {description}
            </p>
          </article>
  )
}

export default OverviewCard