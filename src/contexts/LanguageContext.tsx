import React, { useState, useEffect, createContext, useContext } from "react";
import { useToast } from "@/hooks/use-toast";

// Language options
export const languages = [
  { code: "en", name: "English" },
  { code: "de", name: "German" },
  { code: "ru", name: "Russian" },
  { code: "zh", name: "Chinese" },
];

// Translations for all components and pages
export const translations: {[key: string]: {[key: string]: string}} = {
  "en": {
    // ... keep existing code (Navbar translations, Footer translations, etc.)
    
    // Property Filter translations
    "Find Your Ideal Investment": "Find Your Ideal Investment",
    "Search Properties": "Search Properties",
    "Property Search": "Property Search",
    "Adjust filters to find your perfect property": "Adjust filters to find your perfect property",
    "Price Range": "Price Range",
    "Location": "Location",
    "All Locations": "All Locations",
    "Dubai Marina": "Dubai Marina",
    "Downtown Dubai": "Downtown Dubai",
    "Palm Jumeirah": "Palm Jumeirah",
    "Dubai Hills": "Dubai Hills",
    "Ras Al Khaimah": "Ras Al Khaimah",
    "Property Type": "Property Type",
    "All Types": "All Types",
    "Apartment": "Apartment",
    "Villa": "Villa",
    "Penthouse": "Penthouse",
    "Townhouse": "Townhouse",
    "Bedrooms": "Bedrooms",
    "Any": "Any",
    "Status": "Status",
    "All Properties": "All Properties",
    "Ready": "Ready",
    "Off-Plan": "Off-Plan",
    "Minimum ROI": "Minimum ROI",
    "Apply Filters": "Apply Filters",
    
    // ... keep existing code (remaining translations)
  },
  "de": {
    // ... keep existing code (Navbar translations, Footer translations, etc.)
    
    // Property Filter translations
    "Find Your Ideal Investment": "Finden Sie Ihre ideale Investition",
    "Search Properties": "Immobilien suchen",
    "Property Search": "Immobiliensuche",
    "Adjust filters to find your perfect property": "Passen Sie die Filter an, um Ihre perfekte Immobilie zu finden",
    "Price Range": "Preisklasse",
    "Location": "Standort",
    "All Locations": "Alle Standorte",
    "Dubai Marina": "Dubai Marina",
    "Downtown Dubai": "Downtown Dubai",
    "Palm Jumeirah": "Palm Jumeirah",
    "Dubai Hills": "Dubai Hills",
    "Ras Al Khaimah": "Ras Al Khaimah",
    "Property Type": "Immobilientyp",
    "All Types": "Alle Typen",
    "Apartment": "Wohnung",
    "Villa": "Villa",
    "Penthouse": "Penthouse",
    "Townhouse": "Reihenhaus",
    "Bedrooms": "Schlafzimmer",
    "Any": "Beliebig",
    "Status": "Status",
    "All Properties": "Alle Immobilien",
    "Ready": "Bezugsfertig",
    "Off-Plan": "Im Bau",
    "Minimum ROI": "Mindestrendite",
    "Apply Filters": "Filter anwenden",
    
    // ... keep existing code (remaining translations)
  },
  "ru": {
    // ... keep existing code (Navbar translations, Footer translations, etc.)
    
    // Property Filter translations
    "Find Your Ideal Investment": "Найдите идеальную инвестицию",
    "Search Properties": "Поиск недвижимости",
    "Property Search": "Поиск недвижимости",
    "Adjust filters to find your perfect property": "Настройте фильтры, чтобы найти идеальную недвижимость",
    "Price Range": "Ценовой диапазон",
    "Location": "Местоположение",
    "All Locations": "Все места",
    "Dubai Marina": "Дубай Марина",
    "Downtown Dubai": "Даунтаун Дубай",
    "Palm Jumeirah": "Пальма Джумейра",
    "Dubai Hills": "Дубай Хиллс",
    "Ras Al Khaimah": "Рас-эль-Хайма",
    "Property Type": "Тип недвижимости",
    "All Types": "Все типы",
    "Apartment": "Апартаменты",
    "Villa": "Вилла",
    "Penthouse": "Пентхаус",
    "Townhouse": "Таунхаус",
    "Bedrooms": "Спальни",
    "Any": "Любое",
    "Status": "Статус",
    "All Properties": "Вся недвижимость",
    "Ready": "Готово",
    "Off-Plan": "Строящееся",
    "Minimum ROI": "Минимальный ROI",
    "Apply Filters": "Применить фильтры",
    
    // ... keep existing code (remaining translations)
  },
  "zh": {
    // ... keep existing code (Navbar translations, Footer translations, etc.)
    
    // Property Filter translations
    "Find Your Ideal Investment": "寻找您理想的投资",
    "Search Properties": "搜索房产",
    "Property Search": "房产搜索",
    "Adjust filters to find your perfect property": "调整筛选条件找到您的完美房产",
    "Price Range": "价格范围",
    "Location": "位置",
    "All Locations": "所有位置",
    "Dubai Marina": "迪拜码头",
    "Downtown Dubai": "迪拜市中心",
    "Palm Jumeirah": "棕榈岛",
    "Dubai Hills": "迪拜山庄",
    "Ras Al Khaimah": "拉斯海马",
    "Property Type": "房产类型",
    "All Types": "所有类型",
    "Apartment": "公寓",
    "Villa": "别墅",
    "Penthouse": "顶层公寓",
    "Townhouse": "联排别墅",
    "Bedrooms": "卧室",
    "Any": "任意",
    "Status": "状态",
    "All Properties": "所有房产",
    "Ready": "即可入住",
    "Off-Plan": "期房",
    "Minimum ROI": "最低投资回报率",
    "Apply Filters": "应用筛选",
    
    // ... keep existing code (remaining translations)
  }
};

// ... keep existing code (Language context, provider, and hook)
