import React from 'react';
import { lusitana } from '@/app/ui/fonts';
import _ from 'lodash';

export default function InfoDisplayBox({
  title,
  value,
}: {
  title: string;
  value?: string | null;
}) {
  if (!_.isNull(value) && !_.isUndefined(value)) {
    return (
      <div>
        <label
          htmlFor={title}
          className={`${lusitana.className} truncate ml-3 mb`}
        >
          {title}
        </label>
        <p
          id={title}
          className={`${lusitana.className} truncate rounded-xl bg-white px-2 py-4 text-center text-xl m-3 mt-1`}
        >
          {value}
        </p>
      </div>
    );
  }
}
