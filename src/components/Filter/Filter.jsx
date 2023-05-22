import { Select, NumberInput, Button } from '@mantine/core'

import { IconChevronDown, IconChevronUp, IconX } from '@tabler/icons-react'
import { useState } from 'react'

import './Filter.css'
export function Filter({ onChangeFilterConfig, cataloges }) {
  const [catalogeKey, setCatalogeKey] = useState('')

  const [paymentFromConfig, setPaymentFromConfig] = useState('')
  const [paymentToConfig, setPaymentToConfig] = useState('')

  const [isCatalogeAim, setIsCatalogeAim] = useState(false)

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
    <div className="filter__wrap">
      <div className="filter">
        <div className="filter__title__clear">
          <div>
            <h3 className="filter__title">Фильтры</h3>
          </div>
          <div onClick={handleClearFilter} className="filter__clear">
            <div className="filter__clear__title">
              <span>Сбросить все</span>
            </div>
            <IconX width={16} color="#ACADB9" />
          </div>
        </div>
        <h3 className="filter__text">Отрасль</h3>
        <Select
          data-elem="industry-select"
          className="filter__dropdown"
          placeholder="Выберите отрасль"
          data={cataloges}
          dropdownPosition="bottom"
          value={catalogeKey}
          onChange={(cataloge) => {
            setCatalogeKey(cataloge)
            setIsCatalogeAim(false)
          }}
          onClick={() => setIsCatalogeAim(!isCatalogeAim)}
          rightSection={
            <>
              {isCatalogeAim ? (
                <IconChevronUp color="blue" />
              ) : (
                <IconChevronDown color="#ACADB9" />
              )}
            </>
          }
        />
        <h3 className="filter__text">Оклад</h3>
        <NumberInput
          className="filter__from"
          placeholder="От"
          step={5000}
          type={'number'}
          min={0}
          onChange={setPaymentFromConfig}
          value={paymentFromConfig}
          w={275}
          data-elem="salary-from-input"
        />
        <NumberInput
          className="filter__to"
          placeholder="До"
          step={5000}
          type={'number'}
          min={0}
          onChange={setPaymentToConfig}
          value={paymentToConfig}
          w={275}
          data-elem="salary-to-input"
        />
        <Button onClick={handleApplyFilter} w={275} data-elem="search-button">
          Применить
        </Button>
      </div>
    </div>
  )
}
