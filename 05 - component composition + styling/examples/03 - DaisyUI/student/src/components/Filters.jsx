import Card from './ui/Card';

// src/components/Filters.jsx
export default function Filters() {
  return (
    <Card title="Filters">
      <div className="space-y-4 p-4">
        <form id="frm-filter" className="space-y-4">
          <div className="space-y-1">
            <label htmlFor="q" className="block text-sm font-medium text-base-content">
              Search
            </label>
            <input
              id="q"
              type="text"
              placeholder="Try: tutoring, mental health, bursary"
              className="w-full rounded border border-base-300 px-3 py-2 text-sm text-base-content placeholder-base-content focus:border-base-300 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <hr className="border-base-200" />

          <div className="space-y-2">
            <div className="text-sm font-semibold text-base-content">Category</div>
            <div className="flex flex-wrap gap-2" aria-label="Category filters">
              {['All', 'Academic', 'Wellness', 'Financial', 'Tech'].map((label) => (
                <button
                  key={label}
                  type="button"
                  className="rounded border border-base-300 px-3 py-1 text-xs font-semibold text-base-content hover:bg-primary/20"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm text-base-content">
              <input
                type="checkbox"
                id="openNow"
                className="h-4 w-4 rounded border-base-300 text-base-content focus:ring-primary"
              />
              Open now
            </label>

            <label className="flex items-center gap-2 text-sm text-base-content">
              <input
                type="checkbox"
                id="virtual"
                className="h-4 w-4 rounded border-base-300 text-base-content focus:ring-primary"
              />
              Virtual options
            </label>
          </div>

          <hr className="border-base-200" />

          <div className="flex gap-2">
            <button
              type="button"
              className="rounded border border-base-300 px-4 py-2 text-sm font-semibold text-base-content hover:bg-primary/30"
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded bg-primary px-4 py-2 text-sm font-semibold text-base-100 hover:bg-primary-focus"
            >
              Filter
            </button>
          </div>
        </form>
      </div>
    </Card >
  );
}
