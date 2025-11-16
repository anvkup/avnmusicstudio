// src/app/components/PhoneNumberInput.js

"use client"

import React from 'react'
import 'react-phone-number-input/style.css' 

import PhoneInputWithCountry from 'react-phone-number-input'
import { countries } from "@/lib/countries" 

export function PhoneNumberInput({ value, onChange }) {
  
  const allowedCountries = countries.map(c => c.label.split('(')[0].trim());

  return (
    <PhoneInputWithCountry
      name="phoneInput"
      value={value}
      onChange={onChange}
      countries={allowedCountries}
      defaultCountry="IN"
      className="PhoneInputCustom flex" 
      
      countrySelectComponentProps={{
        className: "bg-white dark:!bg-brand-deep-space rounded-l-md border dark:border-input h-10" 
      }}
      
      inputComponentProps={{
        className: "flex-1 bg-white dark:!bg-brand-deep-space rounded-r-md border-l-0 border dark:border-input placeholder:!text-gray-900 dark:placeholder:text-gray-400 !text-gray-900 dark:!text-brand-white !ring-0 !ring-offset-0 !shadow-none h-10" 
      }}
    />
  )
}