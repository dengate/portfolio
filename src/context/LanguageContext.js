import { createContext, useState, useEffect, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

	useEffect(() => {
		localStorage.setItem("language", language);
	}, [language]);

    const header_text =  {
        "tr": {
            navbar_header: "PORTFOLYO",
            side_bar_header: "Menü",
            side_bar_home_button: "Ana Sayfa",
            side_bar_contact_button: "İletişim",
            side_bar_projects_button: "Projeler",
            side_bar_language_button: "Dili değiştir",
            side_bar_theme_button: "Temayı değiştir"
            /*side_bar_language_tr: "Türkçe",
            side_bar_language_en: "İngilizce"*/
        },
        "en": {
            navbar_header: "PORTFOLIO",
            side_bar_header: "Menu",
            side_bar_home_button: "Home",
            side_bar_contact_button: "Contact",
            side_bar_projects_button: "Projects",
            side_bar_language_button: "Change Language",
            side_bar_theme_button: "Change theme"
            /*side_bar_language_tr: "Turkish",
            side_bar_language_en: "English"*/
        }
    };

    const contact_text =  {
        "tr": {
            email: "Eposta: ahmetemin_97@outlook.com",
            gmail: "Gmail: hergunerahmetemin@gmail.com",
            gsm: "Telefon: 5079647410",
            linkedin: "Linkedin: https://tr.linkedin.com/in/ahmet-emin-hergüner-3b87a5212"
        },
        "en": {
            email: "Email: ahmetemin_97@outlook.com",
            gmail: "Gmail: hergunerahmetemin@gmail.com",
            gsm: "Cellphone: 5079647410",
            linkedin: "Linkedin: https://tr.linkedin.com/in/ahmet-emin-hergüner-3b87a5212"
        }
    };

    const projects_text =  {
        "tr": {
            name: "THS ( Temazsız Hizmet Sistemi )",
            year: "2021",
            language: "Asp .net core mvc",
            description: "Bu proje ile birlikte, herhangi bir işletmede QR kodunu okutarak işletmenin menüsüne erişebilirsiniz. Ödemeyi sistem üzerinden yapabilirsiniz. İşletmeler menülerini düzenleyebilir siparişleri ve cirolarını görüntüleyebilirler. ",
            link: "ths.somee.com"
        },
        "en": {
            name: "THS ( Temazsız Hizmet Sistemi )",
            year: "2021",
            language: "Asp .net core mvc",
            description: "With this project, you can access the menu of any business by scanning the QR code. You can make the payment through the system. Businesses can edit their menus and view their orders and turnovers.",
            link: "ths.somee.com"
        }
    };

    const personalInformation_text =  {
        "tr": {
            name: "Adı: Ahmet Emin",
            surname: "Soyadı: Hergüner",
            birthDate: "Doğum Tarihi: 25/08/1997",
            education: "Eğitim: Başkent Üniversitesi-Bilgisayar Mühendisliği 2021",
            backend_head: "Back end:",
            backend_text:"Web Api, Rest Api, Java Spring, C#, Web Services, WinForms, .Net Core",
            frontend_head:"Front end:",
            frontend_text:"HTML5, CSS3, JavaScript, jQuery, JSON, React, Asp.Net WebForms, Asp.Net MVC",
            database_head:"Database:",
            database_text:"MSSQL, MySql"
        },
        "en": {
            name: "Name: Ahmet Emin",
            surname: "Surname: Hergüner",
            birthDate: "Birth Date: 25/08/1997",
            education: "Education: Başkent University-Computer Engineer 2021",
            backend_head: "Back end:",
            backend_text:"Web Api, Rest Api, Java Spring, C#, Web Services, WinForms, .Net Core",
            frontend_head:"Front end:",
            frontend_text:"HTML5, CSS3, JavaScript, jQuery, JSON, React, Asp.Net WebForms, Asp.Net MVC",
            database_head:"Database:",
            database_text:"MSSQL, MySql"
        }
    };
	const values = {
		language,
		setLanguage,
        header_text,
        personalInformation_text,
        contact_text,
        projects_text
	};


	return (
		<LanguageContext.Provider value={values}>{children}</LanguageContext.Provider>
	);
};

export const useLanguage = () => useContext(LanguageContext);