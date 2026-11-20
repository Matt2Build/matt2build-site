'use client'

import { useMemo, useState } from 'react'

const money = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

function readNumber(value: string): number {
  const parsed = Number(value.replace(/,/g, ''))
  return Number.isFinite(parsed) ? parsed : 0
}

function monthlyPrincipalAndInterest(principal: number, annualPercent: number, years: number): number | null {
  if (principal <= 0 || years <= 0) return null
  const payments = years * 12
  const monthlyRate = annualPercent / 100 / 12
  if (monthlyRate === 0) return principal / payments
  const growth = (1 + monthlyRate) ** payments
  return (principal * monthlyRate * growth) / (growth - 1)
}

const fieldClass =
  'mt-2 w-full rounded-xl border border-[#1f3a32]/20 bg-white px-4 py-3 text-[#1f1a14]'

export function MortgageCalculator() {
  const [price, setPrice] = useState('500000')
  const [down, setDown] = useState('100000')
  const [rate, setRate] = useState('6.5')
  const [years, setYears] = useState('30')

  const result = useMemo(() => {
    const principal = Math.max(0, readNumber(price) - readNumber(down))
    return monthlyPrincipalAndInterest(principal, readNumber(rate), readNumber(years))
  }, [price, down, rate, years])

  return (
    <form className="rounded-3xl border border-[#1f3a32]/15 bg-white p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
      <h2 className="font-serif text-3xl text-[#1f3a32]">Mortgage payment</h2>
      <p className="mt-3 text-sm leading-6 text-[#5c564e]">
        Principal and interest only. Taxes, insurance, and association dues are not included. This is arithmetic, not a
        loan offer.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Home price
          <input className={fieldClass} inputMode="decimal" value={price} onChange={(event) => setPrice(event.target.value)} />
        </label>
        <label className="text-sm font-semibold">
          Down payment
          <input className={fieldClass} inputMode="decimal" value={down} onChange={(event) => setDown(event.target.value)} />
        </label>
        <label className="text-sm font-semibold">
          Interest rate, percent
          <input className={fieldClass} inputMode="decimal" value={rate} onChange={(event) => setRate(event.target.value)} />
        </label>
        <label className="text-sm font-semibold">
          Term, years
          <input className={fieldClass} inputMode="decimal" value={years} onChange={(event) => setYears(event.target.value)} />
        </label>
      </div>
      <p className="mt-6 text-lg" aria-live="polite">
        {result === null ? 'Enter a price above the down payment.' : `About ${money.format(result)} a month.`}
      </p>
    </form>
  )
}

export function NetProceedsCalculator() {
  const [sale, setSale] = useState('500000')
  const [payoff, setPayoff] = useState('220000')
  const [percent, setPercent] = useState('5')
  const [costs, setCosts] = useState('8000')

  const result = useMemo(() => {
    const salePrice = readNumber(sale)
    const commission = salePrice * (readNumber(percent) / 100)
    return salePrice - readNumber(payoff) - commission - readNumber(costs)
  }, [sale, payoff, percent, costs])

  return (
    <form className="rounded-3xl border border-[#1f3a32]/15 bg-white p-6 sm:p-8" onSubmit={(event) => event.preventDefault()}>
      <h2 className="font-serif text-3xl text-[#1f3a32]">Net proceeds to the seller</h2>
      <p className="mt-3 text-sm leading-6 text-[#5c564e]">
        Sale price, minus the mortgage payoff, a commission percent, and other costs you type in. An estimate for the
        conversation, not a closing statement.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-semibold">
          Sale price
          <input className={fieldClass} inputMode="decimal" value={sale} onChange={(event) => setSale(event.target.value)} />
        </label>
        <label className="text-sm font-semibold">
          Mortgage payoff
          <input className={fieldClass} inputMode="decimal" value={payoff} onChange={(event) => setPayoff(event.target.value)} />
        </label>
        <label className="text-sm font-semibold">
          Commission, percent
          <input className={fieldClass} inputMode="decimal" value={percent} onChange={(event) => setPercent(event.target.value)} />
        </label>
        <label className="text-sm font-semibold">
          Other costs
          <input className={fieldClass} inputMode="decimal" value={costs} onChange={(event) => setCosts(event.target.value)} />
        </label>
      </div>
      <p className="mt-6 text-lg" aria-live="polite">
        Estimated net: {money.format(result)}.
      </p>
    </form>
  )
}
