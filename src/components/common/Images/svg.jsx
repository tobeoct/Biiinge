import React, { useState, useEffect } from 'react';
export const SVG = ({vector,type="",width="25",height="25"}) => {
  // const [type, setType] = useState(svgType);
  // useEffect(()=>{
  //   setType(svgType);
  // },[type])
  if(type===""){
  return <svg
    width={width}
    height={height}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  ><path xmlns="http://www.w3.org/2000/svg" d="M12.5 0L15.3064 8.63729H24.3882L17.0409 13.9754L19.8473 22.6127L12.5 17.2746L5.15268 22.6127L7.95911 13.9754L0.611794 8.63729H9.69357L12.5 0Z" fill="#F2C94C"/>
  </svg>
  }
  else if(type==="view"){
    return <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect opacity="0.6" width="18" height="18" fill="url(#pattern0)"/>
    <defs>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlinkHref="#image0" transform="scale(0.015625)"/>
    </pattern>
    <image id="image0" width="64" height="64" xlinkHref="data:image/png;base64,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"/>
    </defs>
    </svg>
  }
  else{
    return<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="18" height="18" viewBox="0 0 18 18" fill="none">
<rect opacity="0.6" width="18" height="18" fill="url(#pattern1)"/>
<defs>
<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlinkHref="#image1" transform="scale(0.015625)"/>
</pattern>
<image id="image1" width="64" height="64" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDBsLKhaJBmiLAAAEh0lEQVRo3u2Yy2/VRRTHz6+v26LBtolgKY20vGwLNCSKLox7QaLcEumDaGthIf+A0RXVVNGFCIka48UXIQFNXQmtJhINcdEHGkgpcEsrWvpKkNoWBRrbj4v7u9OZ3+s+qLK5301753se8ztz5pyZEckggwwyyOAew0pPDUsqpEQKpUhEJuVPGZMhi/9hAuTIU7JNtsgmWeqgpuW8dMlJOWP98x8Fiyf4jEkS4Qaf8vhiu85mN2cTutbRSyNZi+Pc4nn6PZ3cYpwoUca57clfYCdp5tiC+42ccRnu4yA7WEO2FqG1hDnERZfsj1Sn7zzE28wa5kZoY32gThUHGDN0ZnmTvPS+/ZxhqJ8XkzNEiD1EDd1fUo4De7ilGRhl70LAbYkyWmjlCEdopYUyB5vLy0wY+dKcvPM8PjLm/wmFBp9FI73MGzLz9NBgphzFHDVkPkwqgtxPp6Y0xrMOfjM/+26+s9Q4pLcyrPGnWZrI/UOG+RPmt4tQy83A/X+TWodGEe1GfVge5L5cS5559jt3MTuNwE9ziggROpjWRucIO7QsXmFO8UOs9XNfraXNJFtd/Gbt6weoI6SYEPVc0aJQ49LdzpS2rI94uV/NiBK5RqWLz9KK8XEKXHyIz7Vt5yrDbGRUs1/hpEsZ0oK02mOCuxX/pXeBxeKYkqn3XOCFKP3GwzpVrBXRPko8zfeq4Of75lABg7ZUtydfqnWVforiw9mc0tbW232ZSr86CQCNKoVLPfllXFK+viMnNnhIDf3OKh/DLSrzQxIA8pmxJV/ykSjjqvJ3UERoUj//8G80vG7LdEgC8K0t2eorUckN5bMpS96yx2clbF32tRsP6HCiCSiJFX4C1kUJy6z9o03fLkGHh/kkZGKIWww6olq6+Kv2f3nytWeBiGHM/rsy4QRWOjRcoEraJd6WXhMR3lMrMky5j1KySVigqqVP+zWS8N3YUDYn1dAVVvioxbdhvQRAlatUtqEIRUaB8FbtUVMs8HW/RNXTLk9eL0QXjE5LqaphcNWrX9Gg+GO+pfi4ktnlwa9iICDSVHBN0aNs8DDfq/gTLHHx+Xyh+G73FNmgNSPvgkeldp6dYruLr9Ha8SANCz2BfBq1ZjbDJpeu3o5HWOe3huVcVmLzHHA2VcLawQJm6CRChE5VfgHm2OGKnX4gGWSN+INlWqChXXWsOL9N+xIvzLjOQ4V8pfE9PCjB4D46NIVxl8EaY4omup3B52njUPp9wkOpiAh5fGCYPUqxI6T1dLuO5V3sSnAsfz+FGxJN/K2pTrCPXIdEKc20EiHCfpqdtYNc9hkXk794IWnntokqx/l/gL3BZVhpuq9mvQFdJnAp2hyX0zHeCb7lUe26nN7hDWf0UovDD65Uu8RhalmnXc9zWE8th7U6H8fptL7dmIJFmD7PnL/NBFGiTPg8UJznubt0riaRRYNqRsmhm7pFeqLRpvEYEa4ndH2dj3k0eaupPtNly5PyjGyRGnnAQU3JOemSb+Qnay4Vi2k/IlEhJVIkhRJ7qBy1fr3LAGeQQQYZZHCv8C8zKU8Szxc1BgAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMi0yN1QxMTo0MjoyMiswMDowMM0LxRIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTItMjdUMTE6NDI6MjIrMDA6MDC8Vn2uAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="/>
</defs>
</svg>
  }
}