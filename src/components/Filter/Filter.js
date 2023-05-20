import { Select } from '@mantine/core'
import { useState } from 'react'
export function Filter({ onChangeFilterConfig, cataloges }) {

  //ключ отрасли
  const [catalogeKey, setCatalogeKey] = useState()

  const handleApplyFilter = () => {
    onChangeFilterConfig(catalogeKey)
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
      />
    </>
  )
}

