import { TimelineMax as Timeline, Power1, Power2, Power3 } from 'gsap';
export default class Animation {
    setupSelectors(node) {
        this.container = node
    }
    getHomeEnterTimeline(delay) {
        let logoContainer = this.container.querySelector('.js-container-logo'),
            logoImg = this.container.querySelector('.js-logo'),
            shuffleContainer = this.container.querySelector('.js-shuffle');

        let timeline = new Timeline({ paused: true });
        timeline
            .from(logoImg, 1, { width: 0, ease: Power3.easeInOut })
            .to(logoContainer, 1, { height: '35px', bottom: 0, ease: Power3.easeInOut })
            .from(shuffleContainer, 1, { opacity: 0, ease: Power3.easeInOut, delay: 0.5 })
        return timeline;
    }
    getRestaurantEnterTimeline(delay) {
        let infoContainer = this.container.querySelector('.js-info-content'),
            titleRestaurant = this.container.querySelector('.js-title-restaurant'),
            adressRestaurant = this.container.querySelector('.js-address-restaurant'),
            priceRestaurant = this.container.querySelector('.js-price-restaurant'),
            aboutRestaurant = this.container.querySelector('.js-about-restaurant'),
            separator = this.container.querySelector('.separator')



        let timeline = new Timeline({ paused: true });
        // timeline
        timeline
            .to(infoContainer, 1, { y: 0, delay: 1 })
            .from(titleRestaurant, 0.3, { opacity: 0, ease: Power3.easeInOut })
            .from(adressRestaurant, 0.3, { opacity: 0, ease: Power3.easeInOut })
            .from(priceRestaurant, 0.3, { opacity: 0, ease: Power3.easeInOut })
            .from(aboutRestaurant, 0.3, { opacity: 0, ease: Power3.easeInOut })
            .fromTo(separator, 0.3, { width: 0, ease: Power3.easeInOut }, { width: '90%', ease: Power3.easeInOut })
        return timeline;
    }

    getHomeExitTimeline(delay) {
        let timeline = new Timeline({ paused: true });
        return timeline;
    }
    getRestaurantExitTimeline(delay) {
        let timeline = new Timeline({ paused: true });
        return timeline;
    }

    play(pathname, node, appears) {
        this.setupSelectors(node)
        let timeline;
        this.containerName = this.container.classList[1];
        switch (this.containerName) {
            case 'js-container-home':
                timeline = this.getHomeEnterTimeline()
                break;
            case 'js-container-restaurant':
                timeline = this.getRestaurantEnterTimeline()
                break;
            default:
                break;
        }

        window.loadPromise.then(() => requestAnimationFrame(() => timeline.play()));
    }

    exit(node) {
        this.container = node;
        let timeline = new Timeline({ paused: true });

        switch (this.containerName) {
            case 'js-container-home':
                timeline = this.getHomeExitTimeline()
                break;
            case 'js-container-restaurant':
                timeline = this.getRestaurantExitTimeline()
                break;
            default:
                break;
        }
        timeline.play();
    }
}