
const useDarkMode = () => {
    const isdarkmode = useState('dark', () => false)

    if (process.client) {
        let local = localStorage.getItem('darkmode')

        if (!local) {
            localStorage.setItem('darkmode', 'white')
        }

        let html = window.document.querySelector('html')
        console.log('ee',isdarkmode.value);
        if(isdarkmode){
            if (local == 'white') {
                console.log('1-1',local);
                html.classList.add('dark')
                localStorage.setItem('darkmode', 'dark')
                isdarkmode.value = true
            } else {
                console.log('1-2',local);
                html.classList.remove('dark')
                localStorage.setItem('darkmode', 'white')
                isdarkmode.value = false
            }
        }


    }
    return {
        isdarkmode
    }

}
export default useDarkMode



