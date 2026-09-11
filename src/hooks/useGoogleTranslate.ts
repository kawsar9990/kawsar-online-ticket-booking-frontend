import { useState, useEffect, useSyncExternalStore } from 'react';
import i18n from '@/i18n';


interface GoogleTranslateElementOptions {
  pageLanguage: string;
  includedLanguages: string;
  autoDisplay: boolean;
}

interface GoogleTranslateNamespace {
  translate: {
    TranslateElement: new (
      options: GoogleTranslateElementOptions,
      elementId: string
    ) => void;
  };
}

declare global{
    interface Window{
        googleTranslateElementInit?: () => void;
        google?: GoogleTranslateNamespace;
    }
}


const getCookie = (name: string): string | undefined => {
if (typeof document === 'undefined') return undefined;
const cookies = document.cookie.split(';');
for (let i = 0; i < cookies.length; i++) {
 const cookie = cookies[i].trim();

 if(cookie.startsWith(name + '=')){
  return decodeURIComponent(cookie.substring(name.length + 1));
 }
}
  return undefined;
}; 


const subscribe = () => () => {};

const getSnapshot = (): 'EN' | 'BN' =>
    getCookie('googtrans')?.includes('/bn') ? 'BN' : 'EN';


const getServerSnapshot = (): 'EN' | 'BN' => 'EN';


export const useGoogleTranslate = () =>{

    const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    

      useEffect(() => {
      if(lang === 'BN'){
        const observer = new MutationObserver(() => {
            if(document.body.classList.contains('translated-ltr') || document.querySelector('font')){
                i18n.changeLanguage('bn');
                observer.disconnect(); 
            }
        });
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });
        
        const timeoutId = setTimeout(() => {
            i18n.changeLanguage('bn');
            observer.disconnect();
        }, 2000);

        return () => {
        observer.disconnect();
        clearTimeout(timeoutId);
      };

    } else{
      i18n.changeLanguage('en');
    }
    },[lang])
  

    useEffect(()=> {
      const addGoogleTranslateScript = () => {
        if(!document.getElementById('google-translate-script')){
            const script = document.createElement('script');
            script.id = 'google-translate-script';
            script.type = 'text/javascript';
            script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(script);


            window.googleTranslateElementInit = () => {

                if(window.google){
                    new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'bn,en',
                        autoDisplay: false,
                    },
                    'google_translate_element'
                );
                }
            };
        }
      };
      
      addGoogleTranslateScript();
    },[]);


    const toggleLanguage = (): void =>{
        const targetLang = lang === 'EN' ? 'bn' : 'en';

        document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;
        document.cookie = `googtrans=; domain=${window.location.hostname}; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC`;

        document.cookie = `googtrans=/en/${targetLang}; path=/`;
        
        window.location.reload();
    };
    return { lang, toggleLanguage };
}