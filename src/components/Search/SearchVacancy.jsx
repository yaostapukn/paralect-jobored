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
        placeholder="Введите название вакансии"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        icon={<IconSearch />}
        maxLength={78}
        styles={{
          input: {
            height: '48px',
            fontFamily: 'inherit',
            fontWeight: '400',
            fontSize: '14px',
            border: '1px solid #EAEBED',
            paddingLeft: '50px',
            paddingRight: '107px',

            borderRadius: '8px',
            transition: 'all .2s ease',
            '&:hover': {
              border: '1px solid #5E96FC',
              transition: 'all .2s ease',
            },
          },
          icon: {
            paddingLeft: '5px',
          },
        }}
      />
      <Button
        onClick={handleApplySearch}
        styles={{
          root: {
            position: 'absolute',
            zIndex: 1,
            marginLeft: '678px',
            backgroundColor: '#5E96FC',
            borderRadius: '8px',
            width: '83px',
            height: '32px',
            fontFamily: 'inherit',
            fontWeight: '500',
            fontSize: '14px',
            transition: 'all .2s ease',
            '&:hover': { backgroundColor: '#92C1FF' },
            '&:active': { backgroundColor: '#3B7CD3' },
          },
        }}
      >
        Поиск
      </Button>
    </div>
  )
}
