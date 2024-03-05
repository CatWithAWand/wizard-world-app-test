'use client';
import { useState, type ChangeEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@repo/ui/input';
import { cn } from '@repo/ui/utils';

const Search = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') ?? '';
  const [search, setSearch] = useState(name);
  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;

    setSearch(newSearchTerm);
    debouncedRouterPush();
  };

  const debouncedRouterPush = useDebouncedCallback(async () => {
    if (!search.trim()) return router.push('/');

    router.push(`/?name=${search}`);
  }, 250);

  return (
    <div className="group relative flex max-w-fit items-center justify-center pr-0">
      <Input
        defaultValue={search}
        placeholder="Search..."
        onChange={handleChange}
        className={`duration-400 peer flex h-10 w-80 rounded-full border border-neutral-300 bg-white px-3
          py-2 pr-24 text-[0.97rem] text-black opacity-100 shadow-inner outline-none transition-all delay-75
          ease-in-out placeholder:text-neutral-400 focus:border-neutral-700 focus-visible:outline-none
          focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 xl:w-96`}
      />

      <SearchIcon
        className={cn(
          `absolute right-3 h-7 w-7 rounded-full p-1 text-neutral-400 transition-all duration-300
          ease-in-out peer-focus-within:!text-black peer-hover:text-neutral-500`,
        )}
      />
    </div>
  );
};

export default Search;
