<template>
    <div style="position: relative;">
        <div class="what-is">
            <div class="what-is-columns columns is-gapless">
                <div class="column content is-three-fifths is-four-fifths-tablet">
                    <Title title="What is OEHU?" color="white" />
                    <p>
                        The Rotterdam Open Energy Hub/<b>OEHU</b> is a public, open-source, distributed database for smart meter data. Users can contribute their data to a personal energy usage dashboard, detailed datasets from all contributors, and cloud-based data analysis tools.
                    </p>
                    <div @click="goAbout()">
                        <Button class="readmore" title="Read more"/>
                    </div>
                </div>
                <div class="column phone-mockup-wrapper not-on-mobile">
                    <PhoneMockup class="PhoneMockup" />
                </div>
            </div>
        </div>
        <FlowBackground class="FlowBackground not-on-mobile" />
        <img src="../../assets/images/mobile-app-mockup-mobile.svg" class="only-on-mobile" />
    </div>
</template>

<script>
    import Button from "@/components/common/Button.vue";
    import Title from "@/components/common/Title.vue";
    import PhoneMockup from "@/components/home/PhoneMockup.vue";
    import FlowBackground from "@/components/home/FlowBackgroundRight.vue";

    export default {
        name: "WhatIs",
        components: {Button, Title, PhoneMockup, FlowBackground},
        methods: {
          goAbout(){
            document.location = '/about';
          }
        }
    };
</script>

<style scoped lang="scss">
    @import '../../assets/sass/mix.scss';

    .what-is {

        width: 1500px;
        max-width: 100vw;

        position: relative;
        padding: 0 10%;
        margin: 0 auto;
        margin-top: 125px;

        .columns {
            margin-top: 30px;

            @media (min-width: 480px) {
                .content {
                    padding-right: 10%;
                    padding-left: 10%;
                }
            }
        }

        .column {
            flex: 1;
        }

        @include minimum-desktop() {
            .column:first-child {
                flex: 2;
            }
        }

        .what-is-columns {
            max-width: 100%;

            margin-top: 0;
            margin-bottom: 0;
            padding-top: 30px;
            padding-bottom: 30px;

            @media (min-width: 480px) {
                padding-top: 58px;
                padding-bottom: 58px;
            }
        }

        .readmore {
            margin: 12px 0;
            @media (min-width: 480px) {
                margin: 24px 0;
            }
        }

        p {
            font-size: 18px;
            @media (min-width: 480px) {
                font-size: 28px;
                line-height: 48px;
            }
        }

        .phone-mockup-wrapper {
            justify-content: center;
            display: flex;
        }

    }

    .only-on-mobile {
        width: 100%;
    }

</style>