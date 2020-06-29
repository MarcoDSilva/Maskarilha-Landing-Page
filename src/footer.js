const footer = () => {
    const root = document.querySelector('#home')
    const footer = document.createElement('footer')
    footer.classList.add('footer')

    const container = document.createElement('div')
    container.classList.add('footerContainer')

    const d1 = document.createElement('div')
    const d2 = document.createElement('div')
    const d3= document.createElement('div')
    const d4 = document.createElement('div')
    container.appendChild(d1)
    container.appendChild(d2)
    container.appendChild(d3)
    container.appendChild(d4)

    const followUs = document.createElement('h2')
    followUs.innerText = 'Follow us at:'

    d1.appendChild(followUs)
    d1.appendChild(socialMediaLogo('twitter'))
    d1.appendChild(socialMediaLogo('facebook'))
    d1.appendChild(socialMediaLogo('youtube'))

    const companyInfo = document.createElement('h3')
    companyInfo.innerText = 'Company Info'

    const companyLinks = ['All Products', 'About us', 'Contacts', 'Careers']
    d2.appendChild(companyInfo)
    d2.appendChild(createList(companyLinks))
    
    const blogPosts = document.createElement('h3')
    blogPosts.innerText = 'Blog posts'
    const blogLinks = ['OMS new announcement', 'New Masks!', 'World stops after covid.','"EcOnOmY" takes a hit']

    d3.appendChild(blogPosts)
    d3.appendChild(createList(blogLinks))

    const news = document.createElement('h3')
    news.innerText = 'Newsletter form'
    const subscribe = document.createElement('p')
    subscribe.innerHTML = 'Subscribe for more updated info'

    d4.appendChild(news)
    d4.appendChild(subscribe)
    d4.appendChild(newsletterForm())

    footer.appendChild(container)
    root.appendChild(footer)

}

const socialMediaLogo = (brand) => {
    const a = document.createElement('a')
    const i = document.createElement('i')
    a.setAttribute('href', `http://${brand}.com`)
    i.setAttribute('class', `fab fa-${brand} fa-2x`)

    a.appendChild(i)
    return a;
}

const createList = (arr) => {
    const ul = document.createElement('ul')
    
    for(let i = 0; i < arr.length; i++) {
        const li = document.createElement('li')
        const a = document.createElement('a')
        li.appendChild(a)        
        a.setAttribute('href', '#')
        a.innerText = arr[i]
        ul.appendChild(li)
    }

    return ul;
}

const newsletterForm = () => {
    const form = document.createElement('form')
    form.setAttribute('name', 'email-form')
    form.setAttribute('method', 'POST')
    form.setAttribute('data-netlify', 'true')

    const div = document.createElement('div')
    div.classList.add('email-form')

    const span = document.createElement('span')
    span.classList.add('form-control-wrap')

    const input = document.createElement('input')
    input.setAttribute('name', 'email')
    input.setAttribute('type', 'email')
    input.setAttribute('id', 'email')
    input.setAttribute('size', '40')
    input.setAttribute('class', 'form-control')
    input.setAttribute('placeholder', 'email')

    span.appendChild(input)
    div.appendChild(span)

    const btn = document.createElement('button')
    btn.setAttribute('type','submit')
    btn.setAttribute('class', 'form-control submit')

    const i = document.createElement('i')
    i.setAttribute('class', 'fas fa-chevron-right')

    btn.appendChild(i)
    div.appendChild(btn)
    form.appendChild(div)

    return form

}

export { footer }