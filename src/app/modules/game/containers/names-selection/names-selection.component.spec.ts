import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesSelectionComponent } from './names-selection.component';

describe('NamesSelectionComponent', () => {
    let component: NamesSelectionComponent;
    let fixture: ComponentFixture<NamesSelectionComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [NamesSelectionComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NamesSelectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
