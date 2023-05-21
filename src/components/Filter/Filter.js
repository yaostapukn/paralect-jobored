import { Select, NumberInput, Button } from '@mantine/core'

import { IconChevronDown, IconChevronUp, IconX } from '@tabler/icons-react'

import { useState } from 'react'
export function Filter({ onChangeFilterConfig, cataloges }) {
  const [catalogeKey, setCatalogeKey] = useState('')

  const [paymentFromConfig, setPaymentFromConfig] = useState('')
  const [paymentToConfig, setPaymentToConfig] = useState('')

  const [isCatageAim, setIsCatalogeAim] = useState(false)

  //Добавить фильтр
  const handleApplyFilter = () => {
    onChangeFilterConfig(catalogeKey, paymentFromConfig, paymentToConfig)
  }
  //Очистить фильтр
  const handleClearFilter = () => {
    onChangeFilterConfig()
    setCatalogeKey('')
    setPaymentFromConfig('')
    setPaymentToConfig('')
  }

  return (
    <>
      <h3>Фильры</h3>
      <div onClick={handleClearFilter}>
        <div>Сбросить все</div>
        <IconX width={16} color="#ACADB9" />
      </div>

      <Select
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
      <NumberInput
        placeholder="От"
        step={5000}
        type={'number'}
        min={0}
        onChange={setPaymentFromConfig}
        value={paymentFromConfig}
      />
      <NumberInput
        placeholder="До"
        step={5000}
        type={'number'}
        min={0}
        onChange={setPaymentToConfig}
        value={paymentToConfig}
        width={275}
      />
      <button onClick={handleApplyFilter}>Применить</button>
    </>
  )
}
