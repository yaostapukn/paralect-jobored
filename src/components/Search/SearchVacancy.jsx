import { useState } from 'react'
import { Input, Button } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

import './SearchVacancy.css'

export function SearchVacancy({ onChangeSearchConfig }) {
  const [search, setSearch] = useState('')
  const handleApplySearch = () => {
    onChangeSearchConfig(search)
  }
  return (
    <div className="search">
      <Input
        className="search__input"
        placeholder="Введите название вакансии"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<IconSearch />}
        maxLength={78}
      />
      <Button onClick={handleApplySearch} className="search__button">
        Поиск
      </Button>
    </div>
  )
}
