import { Select } from '@mantine/core'

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react'

import { useState } from 'react'
export function Filter({ onChangeFilterConfig, cataloges }) {
  const [catalogeKey, setCatalogeKey] = useState()

  const [isCatageAim, setIsCatalogeAim] = useState(false)

  const handleApplyFilter = () => {
    onChangeFilterConfig(catalogeKey)
    console.log('1');
  }

  return (
    <>
      <Select
        label="Your favorite framework/library"
        placeholder="Выберите отрасль"
        data={cataloges}
        dropdownPosition="bottom"
        value={catalogeKey}
        onChange={setCatalogeKey}
        onClick={() => setIsCatalogeAim(!isCatageAim)}
        rightSection={
          <>
            {isCatageAim ? (
              <IconChevronUp color="blue" />
            ) : (
              <IconChevronDown color="#ACADB9" />
            )}
          </>
        }
      />
      <button onClick={handleApplyFilter}>Отправить</button>
    </>
  )
}
