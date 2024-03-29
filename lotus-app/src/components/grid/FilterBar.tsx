import { cn } from "@/lib/utils";
import { type ItemFilterType, type HeroFilterType } from "@/lib/zod";
import Filter from "./Filter";
import { type DataType } from "@/lib/types";

const FilterBar = ({
  dataType,
  filterCategories,
  filters,
  onFilterClick,
}: {
  dataType: DataType;
  filterCategories:
    | Record<HeroFilterType["category"], HeroFilterType["criteria"][]>
    | Record<ItemFilterType["category"], ItemFilterType["criteria"][]>;
  filters: HeroFilterType[] | ItemFilterType[];
  onFilterClick: (
    category: HeroFilterType["category"] | ItemFilterType["category"],
    criteria: HeroFilterType["criteria"] | ItemFilterType["criteria"]
  ) => void;
}) => {
  return (
    <div
      className={cn(
        "w-full px-4 py-2 fixed bottom-0 left-0 backdrop-blur-lg z-50"
      )}
    >
      <ul className={cn("flex flex-wrap gap-2")}>
        {Object.keys(filterCategories).map((category, idx) =>
          filterCategories[category].map((criteria: string, idx: number) => (
            <Filter
              key={idx}
              dataType={dataType}
              category={category}
              criteria={criteria}
              filters={filters}
              onFilterClick={onFilterClick}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default FilterBar;
