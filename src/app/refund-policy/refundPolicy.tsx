"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";


export default function RefundPolicy() {
const { t } = useTranslation();

const sections = [
    {
      id: 1,
      titleKey: 'refund_policy.section1_title',
      bodyKeys: [
        'refund_policy.section1_p1',
        'refund_policy.section1_p2',
      ],
    },
    {
      id: 2,
      titleKey: 'refund_policy.section2_title',
      bodyKeys: [
        'refund_policy.section2_p1',
        'refund_policy.section2_p2',
        'refund_policy.section2_p3',
        'refund_policy.section2_p4',
        'refund_policy.section2_p5',
        'refund_policy.section2_p6',
      ],
    },
    {
      id: 3,
      titleKey: 'refund_policy.section3_title',
      bodyKeys: [
        'refund_policy.section3_p1',
        'refund_policy.section3_p2',
        'refund_policy.section3_p3',
        'refund_policy.section3_p4',
        'refund_policy.section3_p5',
        'refund_policy.section3_p6',
        'refund_policy.section3_p7',
      ],
    },
    {
      id: 4,
      titleKey: 'refund_policy.section4_title',
      bodyKeys: [
        'refund_policy.section4_p1',
        'refund_policy.section4_p2',
        'refund_policy.section4_p3',
        'refund_policy.section4_p4',
        'refund_policy.section4_p5',
        'refund_policy.section4_p6',
        'refund_policy.section4_p7',
      ],
    },
    {
      id: 5,
      titleKey: 'refund_policy.section5_title',
      bodyKeys: [
        'refund_policy.section5_p1',
      ],
    },
    {
      id: 6,
      titleKey: 'refund_policy.section6_title',
      bodyKeys: [
        'refund_policy.section6_p1',
      ],
    },
  ];


return (
<div className="lg:px-10 lg:py-20 notranslate">
<main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-5xl rounded-lg bg-white p-6 shadow-sm md:p-12">

<div className="pb-8">
 <h1 className="text-[19px] sm:text-2xl font-bold text-[#1E293B] md:text-3xl">
  {t('refund_policy.main_title')}
 </h1>
</div>


<div className="space-y-8">
{sections.map((section, index) => (
<div key={section.id}>
<div className="space-y-3">
  <h2 className="text-base font-bold text-[#334155] md:text-lg">
    {t(section.titleKey)}
  </h2>
  <div className="space-y-1.5 text-sm leading-relaxed text-[#475569]">
    {section.bodyKeys.map((key, i) => (
      <p key={i}>{t(key)}</p>
    ))}
  </div>
</div>
           
  {index !== sections.length - 1 && (
    <hr className="mt-8 border-t border-gray-200" />
    )}
  </div>
))}
</div>
</div>
</main>
</div>
);
}