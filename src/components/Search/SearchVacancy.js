import { useState } from 'react'
import { Input, Button } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'
export function SearchVacancy({onChangeSearchConfig}) {
  const [search, setSearch] = useState('')
  const handleApplySearch = () => {
    onChangeSearchConfig(search)
  }
  return (
    <>
      <Input
        placeholder="Введите название вакансии"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<IconSearch />}
      />
      <Button onClick={handleApplySearch}>Поиск</Button>
    </>
  )
}
