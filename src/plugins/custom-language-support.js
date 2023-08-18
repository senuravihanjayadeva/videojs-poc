import videojs from "video.js";

export default function customLanguageSupport(playerRef) {
  videojs.addLanguage("es", {
    Playlist: "Playlist",
    Play: "Reproducción",
    Pause: "Pausa",
    "Current Time": "Tiempo reproducido",
    Duration: "Duración total",
    "Remaining Time": "Tiempo restante",
    "Stream Type": "Tipo de secuencia",
    LIVE: "DIRECTO",
    Loaded: "Cargado",
    Progress: "Progreso",
    Fullscreen: "Pantalla completa",
    "Non-Fullscreen": "Pantalla no completa",
    Mute: "Silenciar",
    Unmute: "No silenciado",
    "Playback Rate": "Velocidad de reproducción",
    Subtitles: "Subtítulos",
    "subtitles off": "Subtítulos desactivados",
    Captions: "Subtítulos especiales",
    "captions off": "Subtítulos especiales desactivados",
    Chapters: "Capítulos",
    "Close Modal Dialog": "Cerca de diálogo modal",
    "You aborted the video playback":
      "Ha interrumpido la reproducción del vídeo.",
    "A network error caused the video download to fail part-way.":
      "Un error de red ha interrumpido la descarga del vídeo.",
    "The video could not be loaded, either because the server or network failed or because the format is not supported.":
      "No se ha podido cargar el vídeo debido a un fallo de red o del servidor o porque el formato es incompatible.",
    "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.":
      "La reproducción de vídeo se ha interrumpido por un problema de corrupción de datos o porque el vídeo precisa funciones que su navegador no ofrece.",
    "No compatible source was found for this video.":
      "No se ha encontrado ninguna fuente compatible con este vídeo.",
  });
  videojs.addLanguage("pt", {
    Play: "Reproduzir",
    Pause: "Parar",
    Replay: "Reiniciar",
    "Current Time": "Tempo Atual",
    Duration: "Duração",
    "Remaining Time": "Tempo Restante",
    "Stream Type": "Tipo de Stream",
    LIVE: "EM DIRETO",
    Loaded: "Carregado",
    Progress: "Progresso",
    Fullscreen: "Ecrã inteiro",
    "Exit Fullscreen": "Ecrã normal",
    Mute: "Desativar som",
    Unmute: "Ativar som",
    "Playback Rate": "Velocidade de reprodução",
    Subtitles: "Legendas",
    "subtitles off": "desativar legendas",
    Captions: "Anotações",
    "captions off": "desativar anotações",
    Chapters: "Capítulos",
    "Close Modal Dialog": "Fechar Janela Modal",
    Descriptions: "Descrições",
    "descriptions off": "desativar descrições",
    "Audio Track": "Faixa Áudio",
    "You aborted the media playback": "Parou a reprodução do vídeo.",
    "A network error caused the media download to fail part-way.":
      "Um erro na rede fez o vídeo falhar parcialmente.",
    "The media could not be loaded, either because the server or network failed or because the format is not supported.":
      "O vídeo não pode ser carregado, ou porque houve um problema na rede ou no servidor, ou porque formato do vídeo não é compatível.",
    "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
      "A reprodução foi interrompida por um problema com o vídeo ou porque o formato não é compatível com o seu navegador.",
    "No compatible source was found for this media.":
      "Não foi encontrada uma fonte de vídeo compatível.",
    "The media is encrypted and we do not have the keys to decrypt it.":
      "O vídeo está encriptado e não há uma chave para o desencriptar.",
    "Play Video": "Reproduzir Vídeo",
    Close: "Fechar",
    "Modal Window": "Janela Modal",
    "This is a modal window": "Isto é uma janela modal",
    "This modal can be closed by pressing the Escape key or activating the close button.":
      "Esta modal pode ser fechada pressionando a tecla ESC ou ativando o botão de fechar.",
    ", opens captions settings dialog":
      ", abre janela com definições de legendas",
    ", opens subtitles settings dialog":
      ", abre janela com definições de legendas",
    ", opens descriptions settings dialog":
      ", abre janela com definições de descrições",
    ", selected": ", seleccionado",
    "Skip backward {1} seconds": "Recuar de {1} segundos",
    "Skip forward {1} seconds": "Avançar de {1} segundos",
  });
  videojs.addLanguage("ar", {
    Play: "تشغيل",
    Pause: "إيقاف",
    "Current Time": "الوقت الحالي",
    Duration: "مدة",
    "Remaining Time": "الوقت المتبقي",
    "Stream Type": "نوع التيار",
    LIVE: "مباشر",
    Loaded: "تم التحميل",
    Progress: "التقدم",
    Fullscreen: "ملء الشاشة",
    "Exit Fullscreen": "تعطيل ملء الشاشة",
    Mute: "صامت",
    Unmute: "غير الصامت",
    "Playback Rate": "معدل التشغيل",
    Subtitles: "الترجمة",
    "subtitles off": "إيقاف الترجمة",
    Captions: "التعليقات",
    "captions off": "إيقاف التعليقات",
    Chapters: "فصول",
    "You aborted the media playback": "لقد ألغيت تشغيل الفيديو",
    "A network error caused the media download to fail part-way.":
      "تسبب خطأ في الشبكة بفشل تحميل الفيديو بالكامل.",
    "The media could not be loaded, either because the server or network failed or because the format is not supported.":
      "لا يمكن تحميل الفيديو بسبب فشل في الخادوم أو الشبكة ، أو فشل بسبب عدم إمكانية قراءة تنسيق الفيديو.",
    "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":
      "تم إيقاف تشغيل الفيديو بسبب مشكلة فساد أو لأن الفيديو المستخدم يستخدم ميزات غير مدعومة من متصفحك.",
    "No compatible source was found for this media.":
      "فشل العثور على أي مصدر متوافق مع هذا الفيديو.",
    "Play Video": "تشغيل الفيديو",
    Close: "أغلق",
    "Modal Window": "نافذة مشروطة",
    "This is a modal window": "هذه نافذة مشروطة",
    "This modal can be closed by pressing the Escape key or activating the close button.":
      "يمكن غلق هذه النافذة المشروطة عن طريق الضغط على زر الخروج أو تفعيل زر الإغلاق",
    ", opens captions settings dialog": ", تفتح نافذة  خيارات التعليقات",
    ", opens subtitles settings dialog": ", تفتح نافذة  خيارات الترجمة",
    ", selected": ", مختار",
    "Audio Player": "مشغل الصوت",
    "Video Player": "مشغل الفيديو",
    Replay: "إعادة التشغيل",
    "Seek to live, currently behind live":
      "ذهاب إلى نقطة البث المباشر، متأخر عن البث المباشر حاليًا",
    "Seek to live, currently playing live":
      "ذهاب إلى نقطة البث المباشر، البث المباشر قيد التشغيل حاليًا",
    "Progress Bar": "شريط التقدم",
    "progress bar timing: currentTime={1} duration={2}": "{1} من {2}",
    Descriptions: "الأوصاف",
    "descriptions off": "إخفاء الأوصاف",
    "Audio Track": "المسار الصوتي",
    "Volume Level": "مستوى الصوت",
    "The media is encrypted and we do not have the keys to decrypt it.":
      "الوسائط مشفرة وليس لدينا الرموز اللازمة لفك شفرتها.",
    "Close Modal Dialog": "إغلاق مربع الحوار المشروط",
    ", opens descriptions settings dialog": "، يفتح مربع حوار إعدادات الأوصاف",
    "captions settings": "إعدادات التعليقات التوضيحية",
    "subtitles settings": "إعدادات الترجمات",
    "descriptions settings": "إعدادات الأوصاف",
    Text: "النص",
    White: "أبيض",
    Black: "أسود",
    Red: "أحمر",
    Green: "أخضر",
    Blue: "أزرق",
    Yellow: "أصفر",
    Magenta: "أرجواني",
    Cyan: "أزرق سماوي",
    Background: "الخلفية",
    Window: "نافذة",
    Transparent: "شفاف",
    "Semi-Transparent": "نصف شفاف",
    Opaque: "معتم",
    "Font Size": "حجم الخط",
    "Text Edge Style": "نمط حواف النص",
    None: "لا شيء",
    Raised: "بارز",
    Depressed: "منخفض",
    Uniform: "منتظم",
    "Drop shadow": "ظل خلفي",
    "Font Family": "عائلة الخطوط",
    "Proportional Sans-Serif": "Proportional Sans-Serif",
    "Monospace Sans-Serif": "Monospace Sans-Serif",
    "Proportional Serif": "Proportional Serif",
    "Monospace Serif": "Monospace Serif",
    Casual: "Casual",
    Script: "Script",
    "Small Caps": "Small Caps",
    Reset: "إعادة الضبط",
    "restore all settings to the default values":
      "استعادة كل الإعدادات إلى القيم الافتراضية",
    Done: "تم",
    "Caption Settings Dialog": "مربع حوار إعدادات التعليقات التوضيحية",
    "Beginning of dialog window. Escape will cancel and close the window.":
      'بداية نافذة مربع حوار. الضغط على زر "Escape" سيؤدي إلى الإلغاء وإغلاق النافذة.',
    "End of dialog window.": "نهاية نافذة مربع حوار.",
    "{1} is loading.": "{1} قيد التحميل.",
    "Exit Picture-in-Picture": "خرج من وضع صورة داخل صورة",
    "Picture-in-Picture": "صورة داخل صورة",
    "No content": "لا يوجد محتوى",
    Color: "اللون",
    Opacity: "معدل الشفافية",
    "Text Background": "خلفية النص",
    "Caption Area Background": "خلفية منطقة التسمية التوضيحية",
  });
  const selectBoxContainer = document.createElement("div");
  selectBoxContainer.classList.add("custom-select-container");
  const selectBox = document.createElement("select");

  const list = ["en", "ar", "pt", "es"];

  list.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option;
    opt.text = option;
    selectBox.appendChild(opt);
  });

  selectBox.onchange = function () {
    const newLanguage = this.value;
    playerRef.current.language(newLanguage);
  };

  selectBoxContainer.appendChild(selectBox);
  playerRef.current.controlBar.el().appendChild(selectBoxContainer);
}
