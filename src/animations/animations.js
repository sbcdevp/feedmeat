import { TimelineMax as Timeline, Power1, Power2, Power3 } from 'gsap';
export default class Animation {
    setupSelectors(node) {
        this.container = node
        this.logoContainer = this.container.querySelector('.js-container-logo')
        this.logoImg = this.container.querySelector('.js-logo')
        this.shuffleContainer = this.container.querySelector('.js-shuffle')
    }
    getHomeEnterTimeline(delay) {
        let timeline = new Timeline({ paused: true });
        timeline
            .from(this.logoImg, 1.5, { width: 0, ease: Power3.easeInOut })
            .to(this.logoContainer, 1, { height: '35px', bottom: 0, ease: Power3.easeInOut })
            .from(this.shuffleContainer, 1, { opacity: 0, ease: Power3.easeInOut, delay: 0.5 })
        return timeline;
    }
    getRestaurantEnterTimeline(delay) {
        let timeline = new Timeline({ paused: true });
        // timeline
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