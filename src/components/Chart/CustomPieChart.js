import React from 'react'; 
import { ResponsivePie } from '@nivo/pie'

const CustomPieChart = () => {
    const chartData = [
        {
            id: 1,
            title: 'Total Pending Orders',
            subTitle: 'Today',
            count: '10',
            compName: 'sample',
            footerTitle_1: 'Sample',
            footerSubTitle_1: 'test',
            footerCount_1: '777',

            footerTitle_2: 'Current Daily Order',
            footerSubTitle_2: 'Volume limitation',
            footerCount_2: '10000',

        }
    ]

    const pieChartData = [
        {
            "id": "c",
            "label": "c",
            "value": 564,
            "color": "#7367F0"
        },
        {
            "id": "erlang",
            "label": "erlang",
            "value": 367,
            "color": "hsl(257, 70%, 50%)"
        },
        {
            "id": "sass",
            "label": "sass",
            "value": 219,
            "color": "hsl(213, 70%, 50%)"
        },
        {
            "id": "go",
            "label": "go",
            "value": 250,
            "color": "hsl(140, 70%, 50%)"
        },
    ]
    return (
        <div className='w-168_'>
            {chartData.map((chart) =>
                <div key={chart.id} className='h-248_ w-44 bg-white rounded-lg px-3 py-3.5 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <div>
                            <p className='text-11_ font-extrabold  w-full'>
                                {chart.title}
                            </p>
                            <p className='text-11_ font-extrabold  w-full'>
                                {chart.subTitle}
                            </p>
                        </div>
                        <p className='text-15_ font-bold'>
                            {chart.count}
                        </p>
                    </div>
                    <div className='relative text-center self-center'>
                        <div className="h-20 w-20 flex self-center   ">
                            <ResponsivePie
                                data={pieChartData}
                                margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
                                innerRadius={0.7}
                                activeOuterRadiusOffset={4}
                                colors={['#d0affb', '#a345f7', '#8f00f5', '#0000']}

                                enableArcLinkLabels={false}
                                arcLinkLabelsSkipAngle={10}
                                arcLinkLabelsTextColor="#333333"
                                arcLinkLabelsThickness={2}
                                enableArcLabels={false}
                                arcLabelsRadiusOffset={0.7}
                                arcLabelsSkipAngle={10}
                                arcLabelsTextColor={{
                                    from: 'color',
                                    modifiers: [
                                        [
                                            'darker',
                                            2
                                        ]
                                    ]
                                }}
                                legends={[]}
                            />
                        </div>
                        <div className='absolute inset-y-0 flex items-center justify-center   inset-x-1/2 '>
                            <p className='text-15_ font-bold'>
                                {chart.count}% </p>
                        </div>
                    </div>
                    <div>
                        <div className='flex justify-between   border-grayMedium_ border-b-2'>
                            <div className=''>
                                <p className='text-9_'> {chart.footerTitle_1}</p>
                                <p className='text-9_'> {chart.footerSubTitle_1}</p>
                            </div>
                            <p className='text-10_'>{chart.footerCount_1}</p>
                        </div>

                        <div className='flex justify-between'>
                            <div className=''>
                                <p className='text-9_'> {chart.footerTitle_2}</p>
                                <p className='text-9_'> {chart.footerSubTitle_2}</p>
                            </div>
                            <p className='text-10_'>{chart.footerCount_2}</p>
                        </div>
                    </div>


                </div>

            )
            }
        </div>

    )
}

export default CustomPieChart